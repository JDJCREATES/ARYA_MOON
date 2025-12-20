"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Gallery } from "@/types";

interface CheckoutButtonProps {
  gallery: Gallery;
}

export default function CheckoutButton({ gallery }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleCheckout = async () => {
    setIsLoading(true);
    
    // TODO: Implement payment processing logic
    console.log("Checkout:", gallery);
    
    setIsLoading(false);
  };
  
  return (
    <Button 
      onClick={handleCheckout}
      disabled={isLoading}
      className="w-full"
      size="lg"
    >
      {isLoading ? "Processing..." : `Buy Now - $${gallery.price.toFixed(2)}`}
    </Button>
  );
}
