// utils/getSplitText.ts
export function getSplitText(): any {
    return (
      (window as any).SplitText?.default ??
      (window as any).SplitText ??
      (window as any).gsap?.SplitText
    )
  }