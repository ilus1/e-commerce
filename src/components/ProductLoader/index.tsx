import ContentLoader, { IContentLoaderProps } from "react-content-loader"
import { JSX } from "react/jsx-runtime"

const ProductLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={218}
    height={285}
    viewBox="0 0 218 285"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="174" rx="3" ry="3" width="124" height="22" />
    <rect x="14" y="232" rx="3" ry="3" width="192" height="9" />
    <rect x="142" y="173" rx="3" ry="3" width="64" height="26" />
    <rect x="14" y="216" rx="3" ry="3" width="192" height="9" />
    <rect x="0" y="253" rx="3" ry="3" width="218" height="32" />
    <rect x="16" y="18" rx="8" ry="8" width="180" height="140" />
  </ContentLoader>
)

export default ProductLoader
