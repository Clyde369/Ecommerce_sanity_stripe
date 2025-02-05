import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({
    product: {
        image,
        name,
        slug,
        price,
    },
}) => {
    console.log(image);
    console.log(name);
    console.log(slug);
    console.log(price);
    return (
        <div>
            <Link
                href={`/product/${slug?.current}`}
            >
                <div className="product-card">
                    <img
                        src={
                            image &&
                            image[0]
                                ? urlFor(
                                      image[0]
                                  )
                                : ""
                        }
                        alt={name || ""}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className="product-name">
                        {name}
                    </p>
                    <p className="product-price">
                        R{price}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Product;
