import { CategoryData, DivProps } from "../types";
import Label from "./Label";

interface CategoryLabelProps {
  readonly className?: string;
  readonly data: CategoryData;
}

const CategoryLabel: React.FC<CategoryLabelProps & DivProps> = ({className, data}) => {
  return (
    <Label className={className} alt={data.name} iconSrc={data.image} iconFA={data.icon}>{data.name}</Label>
  );
}

export default CategoryLabel;