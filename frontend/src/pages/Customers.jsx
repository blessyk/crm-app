import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

import Sidebar from "../components/layout/Sidebar";
import CustomerTable from "../components/customers/CustomerTable";
import CustomerModal from "../components/customers/CustomerModal";

import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../services/customerService";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] =
    useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const data = await getCustomers();
      setCustomers(data);
    } catch (error) {
      console.error(
        "Error fetching customers:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOrUpdate = async (
  customerData
) => {
  try {
    if (selectedCustomer) {
      const updatedCustomer =
        await updateCustomer(
          selectedCustomer._id,
          customerData
        );

      setCustomers((prev) =>
        prev.map((customer) =>
          customer._id === updatedCustomer._id
            ? updatedCustomer
            : customer
        )
      );
    } else {
      const newCustomer =
        await createCustomer(customerData);

      setCustomers((prev) => [
        ...prev,
        newCustomer,
      ]);
    }

    setShowModal(false);
    setSelectedCustomer(null);
  } catch (error) {
    console.error(error);
  }
};

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this customer?"
      );

    if (!confirmDelete) return;

    try {
      await deleteCustomer(id);
      setCustomers((prev) =>
        prev.filter(
          (customer) =>
            customer._id !== id
        )
      );
    } catch (error) {
      console.error(
        "Delete Error:",
        error
      );
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 flex justify-center items-center text-xl font-semibold">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">
              Customer Management
            </h1>

            <p className="text-gray-500 mt-1">
              Manage all your customers
            </p>
          </div>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="
              flex items-center gap-2
              px-5 py-3
              rounded-xl
              text-white
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              hover:scale-105
              transition
            "
          >
            <FiPlus />
            Add Customer
          </button>
        </div>

        {/* Table */}
       <CustomerTable
  customers={customers}
  onDelete={handleDelete}
  onEdit={(customer) => {
    setSelectedCustomer(customer);
    setShowModal(true);
  }}
/>

        {/* Modal */}
       <CustomerModal
  isOpen={showModal}
  onClose={() => {
    setShowModal(false);
    setSelectedCustomer(null);
  }}
  onSubmit={handleCreateOrUpdate}
  customer={selectedCustomer}
/>
      </div>
    </div>
  );
};

export default Customers;