import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductComponent = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 200); // quick flash
    };

    return (
        <div
            onClick={handleClick}
            className="relative bg-[url('https://orteil.dashnet.org/cookieclicker/img/storeTile.jpg')] bg-cover bg-no-repeat h-16 w-full flex items-center p-2 cursor-pointer group overflow-hidden"
        >
            {/* Click Overlay Border */}
            <AnimatePresence>
                {clicked && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="absolute inset-0 border-4 border-black/50 pointer-events-none rounded-sm"
                    />
                )}
            </AnimatePresence>

            {/* Product Icon */}
            <div
                className="h-16 w-16 bg-[url('https://cdn.dashnet.org/cookieclicker/img/buildings.png?v=2.052')]"
            ></div>

            {/* Product Info */}
            <div className="flex flex-col justify-center ml-4 flex-grow">
                <span className="font-bold text-lg text-white">Upgrade Name</span>
                <div className="flex items-center">
                    <span className="text-sm text-[#6f6] font-bold mr-1">Price</span>
                    <img
                        src="https://orteil.dashnet.org/cookieclicker/img/money.png"
                        alt="Price Icon"
                        className="h-4 w-4"
                    />
                </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center">
                <span className="font-bold text-black opacity-20 text-5xl">
                    <span className="font-mono">1</span>
                </span>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 pointer-events-none"></div>
        </div>
    );
};

export default ProductComponent;
