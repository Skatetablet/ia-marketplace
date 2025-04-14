"use client"

import type React from "react"
import { useState, useRef } from "react"
import { ImageIcon, SlidersHorizontal, ArrowUp } from "lucide-react"
import styles from "../styles/form.module.css"
import Modal from "./modal"

// Puedes adaptar esta interfaz según tus necesidades
interface FormProps {
  isLoading: boolean
  onSubmit: (values: any) => Promise<void>
  onOpenOptions: () => void
}

export default function Form({ isLoading, onSubmit, onOpenOptions }: FormProps) {
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [prompt, setPrompt] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropAreaRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const dragCounter = useRef(0)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    addImages(files)
  }

  const addImages = (files: File[]) => {
    if (files.length === 0) return

    // Limit to 5 images total
    const totalImages = previewUrls.length + files.length

    if (totalImages > 5) {
      setError("You can upload a maximum of 5 images")
      const allowedNewImages = 5 - previewUrls.length
      files = files.slice(0, allowedNewImages)

      if (files.length === 0) return
    }

    const newPreviewUrls = files.map((file) => URL.createObjectURL(file))
    setPreviewUrls([...previewUrls, ...newPreviewUrls])
  }

  const removeImage = (index: number) => {
    const newPreviewUrls = [...previewUrls]
    URL.revokeObjectURL(newPreviewUrls[index])
    newPreviewUrls.splice(index, 1)
    setPreviewUrls(newPreviewUrls)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  // Drag and drop handlers
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounter.current += 1
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounter.current -= 1
    if (dragCounter.current === 0) {
      setIsDragging(false)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounter.current = 0
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files).filter((file) => file.type.startsWith("image/"))
      addImages(files)
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Abrir el modal en lugar de enviar el formulario directamente
    setIsModalOpen(true)
  }

  const handleConfirmSubmit = async () => {
    // Cerrar el modal
    setIsModalOpen(false)

    // Recopilar los valores del formulario
    const values = {
      prompt,
      images: previewUrls,
    }

    // Enviar el formulario
    await onSubmit(values)
  }

  const formContainerClass = `
    ${styles.formContainer} 
    ${isDragging ? styles.dragging : ""} 
    ${isFocused ? styles.focused : ""} 
    ${isLoading ? styles.loading : ""}
  `.trim()

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <div
          ref={dropAreaRef}
          className={formContainerClass}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
       
          <div className={styles.inputContainer}>
            <div className={styles.inputWrapper}>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className={styles.fileInput}
                disabled={isLoading}
              />
              <button type="button" onClick={triggerFileInput} className={styles.iconButton} disabled={isLoading}>
                <ImageIcon className={styles.icon} />
              </button>

              <button type="button" onClick={onOpenOptions} className={styles.iconButton} disabled={isLoading}>
                <SlidersHorizontal className={styles.icon} />
              </button>
            </div>

            <textarea
              placeholder="Prueba Alpha AI..."
              className={styles.textarea}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isLoading}
            />

            <div>
              <button type="submit" className={styles.submitButton} disabled={isLoading}>
                <ArrowUp className={styles.icon} />
              </button>
            </div>
          </div>

          {isDragging && (
            <div className={styles.dragOverlay}>
              <p className={styles.dragText}>Drop images here</p>
            </div>
          )}
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}
      </form>

      {/* Modal de confirmación */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Alpha</h2>
          <p className={styles.modalText}>Es un agente que te ayudara a... lorem ipsum</p>
          <div className={styles.promptPreview}>{ <em>Visita nuestra pagina web para probar</em>}</div>

          {previewUrls.length > 0 && (
            <div className={styles.imagesInfo}>
              <p>
                {previewUrls.length} image{previewUrls.length !== 1 ? "s" : ""} selected
              </p>
            </div>
          )}

          <div className={styles.modalActions}>
            <button className={styles.cancelButton} onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button className={styles.confirmButton} onClick={handleConfirmSubmit}>
              Ir
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

