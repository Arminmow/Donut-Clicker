import React from 'react';

const ProductComponent = () => {
    return (
        <div
            className="relative bg-[url('https://orteil.dashnet.org/cookieclicker/img/storeTile.jpg')] bg-[0px_128px] h-16 w-full flex items-center p-2"
        >
            <div
                className="h-16 w-16 bg-[url('https://cdn.dashnet.org/cookieclicker/img/buildings.png?v=2.052')] bg-[0px_0px]"
            ></div>
            <div className="flex flex-col justify-center ml-4 flex-grow">
                <span className="font-bold text-lg text-white">Upgrade Name</span>
                <span className="text-sm text-gray-300">Count: 0</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-bold text-white mr-1">Price</span>
                <img
                    src="https://orteil.dashnet.org/cookieclicker/img/money.png"
                    alt="Price Icon"
                    className="h-4 w-4"
                />
            </div>
        </div>
    );
};

export default ProductComponent;