export const Container = ({ title, children }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
