import React from "react";
import ProductsList from "../components/ProductsList";

export default function ProductsPage() {
  //fetch products directly from db
  const prods = [
    {
      id: "33456",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
    },
    {
      id: "33495",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
    },
    {
      id: "334356",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
    },
    {
      id: "334356",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
    },
    {
      id: "334356",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
    },
    {
      id: "334356",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
    },
    {
      id: "334356",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
    },
  ];
  return  <div className='container'>
            <ProductsList products={prods} />
          </div>;
}
