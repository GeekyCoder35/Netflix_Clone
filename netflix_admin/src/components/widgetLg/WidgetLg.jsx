import "./WidgetLg.css"

export default function widgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgStatusButton "+type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgRow">
          <th className="widgetLgColumnHeader">Customer</th>
          <th className="widgetLgColumnHeader">Date</th>
          <th className="widgetLgColumnHeader">Amount</th>
          <th className="widgetLgColumnHeader">Status</th>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                 className="widgetLgUserImg" alt=""/>
            <span className="widgetUsername">Susan George</span>            
          </td>
          <td className="widgetLgDate">25 Dec 2022</td>
          <td className="widgetLgAmount">$350</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>

        <tr className="widgetLgRow">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                 className="widgetLgUserImg" alt=""/>
            <span className="widgetUsername">Susan George</span>            
          </td>
          <td className="widgetLgDate">25 Dec 2022</td>
          <td className="widgetLgAmount">$350</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>

        <tr className="widgetLgRow">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                 className="widgetLgUserImg" alt=""/>
            <span className="widgetUsername">Susan George</span>            
          </td>
          <td className="widgetLgDate">25 Dec 2022</td>
          <td className="widgetLgAmount">$350</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
      </table>
    </div>
  )
}
