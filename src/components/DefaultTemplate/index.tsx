import Header from "../Header";

export default function DefaultTemplate({ children }: React.PropsWithChildren) {
  return (
    <>
      <div>
        <Header />
      </div>
      
      <div>{children}</div>
    </>
  );
}
