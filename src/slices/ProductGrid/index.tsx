import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SkateboardProduct } from "./SkateboardProduct";
/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid: FC<ProductGridProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-gray"
    >
       <Heading className="text-center ~mb-4/6" as="h2">
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="text-center ~mb-6/10">
          <PrismicRichText field={slice.primary.body} />
        </div>
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {slice.primary.product.map(
          ({ skateboard }) =>
            isFilled.contentRelationship(skateboard) && (
              <SkateboardProduct key={skateboard.id} id={skateboard.id} />
            )
        )}
      </div>
    </Bounded>
  );
};

export default ProductGrid;
