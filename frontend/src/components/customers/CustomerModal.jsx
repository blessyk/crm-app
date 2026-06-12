import { useEffect, useState } from "react";

function CustomerModal({
  isOpen,
  onClose,
  onSubmit,
  customer,
}) {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      status: "Lead",
    });

  useEffect(() => {
    if (customer) {
      setFormData({
        name: customer.name || "",
        email: customer.email || "",
        phone: customer.phone || "",
        company: customer.company || "",
        status:
          customer.status || "Lead",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        status: "Lead",
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6">
          {customer
            ? "Update Customer"
            : "Add Customer"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="Lead">
              Lead
            </option>

            <option value="Customer">
              Customer
            </option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              {customer
                ? "Update Customer"
                : "Save Customer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerModal;