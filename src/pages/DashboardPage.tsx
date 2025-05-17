import React from "react";
import { FaUserFriends, FaBoxes, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Customer */}
                <Link to="/customers">
                    <div className="bg-blue-100 hover:bg-blue-200 transition rounded-xl shadow-md p-6 text-center">
                        <FaUserFriends className="text-blue-700 text-4xl mx-auto mb-3" />
                        <h2 className="text-lg font-semibold text-blue-800">Customer</h2>
                    </div>
                </Link>


                {/* Stock */}
                <Link to="/stock">
                    <div className="bg-green-100 hover:bg-green-200 transition rounded-xl shadow-md p-6 text-center">
                        <FaBoxes className="text-green-700 text-4xl mx-auto mb-3" />
                        <h2 className="text-lg font-semibold text-green-800">Stock</h2>
                    </div>
                </Link>

                {/* Order */}
                <Link to="/orders">
                    <div className="bg-red-100 hover:bg-red-200 transition rounded-xl shadow-md p-6 text-center">
                        <FaShoppingCart className="text-red-700 text-4xl mx-auto mb-3" />
                        <h2 className="text-lg font-semibold text-red-800">Order</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
