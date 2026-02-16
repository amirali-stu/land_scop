import { useEffect, useState } from "react";
import "./styles/dashboard.css";
const USERS = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: [
    "علی رضایی",
    "محمد احمدی",
    "سارا محمدی",
    "زهرا حسینی",
    "امیر کاظمی",
    "نرگس جعفری",
    "حسین موسوی",
    "مریم عباسی",
    "رضا کریمی",
    "فاطمه صادقی",
  ][i % 10],
  role: [
    "Frontend Developer",
    "Backend Developer",
    "UI Designer",
    "Product Manager",
    "DevOps Engineer",
    "QA Engineer",
    "Tech Lead",
    "UX Researcher",
    "Mobile Developer",
    "HR Manager",
  ][i % 10],
}));
export default function Users() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const pageSize = 8;
  const filteredUsers = USERS.filter((u) => u.name.includes(search));

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  return (
    <div className="dashboard">
      <header className="header">
        <h1>User Management</h1> <p>مدیریت کاربران سیستم</p>
      </header>
      <input
        className="search-input"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder="جستجوی نام کاربر..."
      />
      {/* TABLE */}
      <table className="user-table">
        <thead>
          <tr>
            <th>شماره</th> <th>نام</th> <th>سمت</th> <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td> <td>{user.name}</td> <td>{user.role}</td>
              <td>
                <button onClick={() => setSelectedUser(user)}>مشاهده</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* PAGINATION */}
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filteredUsers.length / pageSize) },
          (_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "active" : ""}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ),
        )}
      </div>
      {/* MODAL */}
      {selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedUser.name}</h3> <p>{selectedUser.role}</p>
            <button onClick={() => setSelectedUser(null)}>بستن</button>
          </div>
        </div>
      )}
    </div>
  );
}
