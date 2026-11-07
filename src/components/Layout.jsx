// src/components/Layout.jsx
function Layout({ children }) {
  return (
    <div className="app-container">
      <main className="app-main">{children}</main>
    </div>
  );
}
export default Layout;