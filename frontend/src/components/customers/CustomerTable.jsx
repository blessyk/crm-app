import { FiEdit, FiTrash2 } from "react-icons/fi";

function CustomerTable({
  customers,
  onDelete,onEdit,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Company</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <tr
                key={customer._id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4">
                  {customer.name}
                </td>

                <td className="p-4">
                  {customer.email}
                </td>

                <td className="p-4">
                  {customer.phone}
                </td>

                <td className="p-4">
                  {customer.company}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      customer.status ===
                      "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                   <button
                     onClick={() => onEdit(customer)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                    >
                  <FiEdit />
                  </button>

                    <button
                      onClick={() =>
                        onDelete(customer._id)
                      }
                      className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center p-8 text-gray-500"
              >
                No Customers Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;