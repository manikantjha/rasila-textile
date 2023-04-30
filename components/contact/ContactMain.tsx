import ContactRow from "./contactRow/ContactRow";

export default function ContactMain() {
  return (
    <>
      <ContactRow />
      <div style={{ padding: "24px", backgroundColor: "#f2f2f2" }}>
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
          New Enquiry
        </h2>
        <table style={{ border: "solid 1px", width: "50%", margin: "auto" }}>
          <tr style={{ border: "solid 1px", padding: "4px" }}>
            <td style={{ border: "solid 1px", padding: "4px" }}>Name:</td>
            <td style={{ border: "solid 1px", padding: "4px" }}>asd</td>
          </tr>
          <tr style={{ border: "solid 1px", padding: "4px" }}>
            <td style={{ border: "solid 1px", padding: "4px" }}>Email:</td>
            <td style={{ border: "solid 1px", padding: "4px" }}>
              being.manikantjha@gmail.com
            </td>
          </tr>
          <tr style={{ border: "solid 1px", padding: "4px" }}>
            <td style={{ border: "solid 1px", padding: "4px" }}>Phone No.:</td>
            <td style={{ border: "solid 1px", padding: "4px" }}>9876543210</td>
          </tr>
          <tr style={{ border: "solid 1px", padding: "4px" }}>
            <td style={{ border: "solid 1px", padding: "4px" }}>Message:</td>
            <td style={{ border: "solid 1px", padding: "4px" }}>
              Message Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente deleniti dignissimos, ea qui architecto, unde praesentium
              a expedita nostrum harum atque hic dicta obcaecati natus alias
              pariatur doloribus excepturi ullam fugit vitae impedit? Doloremque
              excepturi cupiditate culpa numquam assumenda omnis nemo reiciendis
              consectetur quia. Ducimus, quisquam! Ad optio expedita libero.
            </td>
          </tr>
          <tr style={{ border: "solid 1px", padding: "4px" }}>
            <td style={{ border: "solid 1px", padding: "4px" }}>
              Product Name:
            </td>
            <td style={{ border: "solid 1px", padding: "4px" }}>asd</td>
          </tr>
        </table>
      </div>
    </>
  );
}
