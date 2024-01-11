import TextMask from "../animations/textMask/textMask";
import { PageTitleProps } from "./model";

const PageTitle: React.FC<PageTitleProps> = ({ text, variant }) => {
  return <TextMask content={[text]} variant={variant} delay={0} />;
};

export default PageTitle;
