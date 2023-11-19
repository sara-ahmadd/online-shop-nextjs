import React from "react";
import ProductsList from "../components/ProductsList";
import Link from "next/link";

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
      new: false,
    },
    {
      id: "33495",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
      new: false,
    },
    {
      id: "33435236",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
      new: false,
    },
    {
      id: "3343536",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
      new: "on",
    },
    {
      id: "33435699",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
      new: "on",
    },
    {
      id: "33435678",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
      new: false,
    },
    {
      id: "3343566",
      title: "jacket",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 0,
      description: "jdsrfgh cvnjjdijg kf",
      new: "on",
    },
  ];
  return (
    <div className="page mx-auto flex items-center justify-between p-5">
      <ProductsList products={prods} />
    </div>
  );
}
