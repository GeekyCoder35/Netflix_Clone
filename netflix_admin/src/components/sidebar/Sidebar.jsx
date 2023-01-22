import React from 'react'
import './Sidebar.css'
import { LineStyle, TrendingUp, Timeline, PieChart, Person, Email, Message, QuestionAnswer, 
  ShowChart, Work, Payment, Tv, Poll } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className='link'>
              <li className="sidebarListItem">
                <LineStyle className='sidebarIcon'/> Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon'/> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon'/> Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick-Menu</h3>
          <ul className="sidebarList">
            <Link to="/user" className='link'>
              <li className="sidebarListItem">
                <Person className='sidebarIcon'/> User
              </li>
            </Link>
            <Link to="/products" className='link'>
              <li className="sidebarListItem">
                <Tv className='sidebarIcon'/> Product
              </li>
            </Link>
            <li className="sidebarListItem">
              <Payment className='sidebarIcon'/> Transactions
            </li>
            <li className="sidebarListItem">
              <PieChart className='sidebarIcon'/> Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className='sidebarIcon'/> Mail
            </li>
            <li className="sidebarListItem">
              <QuestionAnswer className='sidebarIcon'/> Feedback
            </li>
            <li className="sidebarListItem">
              <Message className='sidebarIcon'/> Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Work className='sidebarIcon'/> Manage
            </li>
            <li className="sidebarListItem">
              <ShowChart className='sidebarIcon'/> Analytics
            </li>
            <li className="sidebarListItem">
              <Poll className='sidebarIcon'/> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
