import React from 'react';
import './Topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topbarleft">
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAk1BMVEX////lCRTkAADnAAD0bXLqAAD84eLlABD6zM/61Nb95ebqFyL97+/kAATrABHxVFr1dnrvYmf2tbfrAAn5vsD3iYz3naD+9PX0pKfuXWH96+zuKjL5vL796OnlAAv70dPuQkn3rrHtO0HtNDvvUVf72tz6xcf1jZH3l5v2fIHybXPsLDTtIizuSE/2e3/2kpXqEx8t2aIGAAAG6ElEQVR4nO2biXKqMBhGWcSo1bqLK2qpuFSt7/90F4EsxCAV03vlzndmOlMDJuEQ+LNpGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgtdh0KzFbIXFJEztukjKlKTfsouODzOOVSrcWnbLNOj5ZRMel029oshOqScqepdSF86q8Kq4qn4ep2VaMs+CJc5poNmm5jpXBJDo+zjocYveiUz4zj8eXzEroqWvaYDWlQnYsi45w3kGZ+pQiM8Ye88RBkkjeuCJTTaubKMo4fs05vuZ2K+O4Eyt6J/HHbEX0fKqoSr9C+ry9NGiiadfVGRVW1GqXTpHRpaXa/Ds7miZekB5Fpl1liWVRFNAk70ST3C+PFjvXr2hXOkXujD1pNG1OzyJHTYYERZ5fOkXGkBZr0YB8oqWI71Zdikx7WTpFG9ZmZvELe8kSzOkvKLL2P1HUygn6NJ6YRAr6TJGnDvpFFBkr1miC6POBNauzLkOiIvL2A0Vet5NmFB0PDsnHs09fDx/nJOlQSynyVud0DpVpcUU9FpCjW7Xo09J1Rfy0ItMe5CtyNjkZdlsZt5EqsrbK7xVT1HyjrdZphB+/WSPSFfGNtCLrkCTeU5R3d5giuW/LFA3VXyykyDgzKWFzdn0W8QfqTIogKiKXZBBSIkWs/teAvOZv75xaPoKoyLTXcWKJFBkfrOHUjBX7f5RTy0dIKWp9xollUjSmydZ58wsR35AUmXacdZkUTW0axGZt2oiyiiiGpChuoGVSxMeyhBrSGfENWZG3ihJLpWiQuoIoh0lOHR8jrSgZhJRKEY/07CKCnDo+hqQo7teVSpHxLTUj7yunig8iKfL863CwXIrkIba+MX6MpChupPcU1Vy3eWUaopo+z1XktUcCTXa8sCJpDoEcdUZ841ZRdGV3FJEv3/+azWbHkEtFkWGuItOzOQ6f6iyuaJ26Bj5hoQlZEXl370+GEM8jCcrIka9IJBp8xhRX5F4Iz5EIE8x6kBVFU74/nFJ7FUV88jGrUk/BFdEadsunqC7UTnPENwRFl2NcRfK+KJ0i48S6Rt5HIQ33YIre9sl/YcwsnSI2ltUe8Q1BEQn68T/hcL90itiCmpihLpiifmOSXINd/V1FxGpRLE2K2FBW70xRDFe0oK3VHgV3FNkO69QoJ4hzFRG/O2G0eTfvCUVscZ8NxHUitKJFUhDx7yiyx0FQqy3rIZulqgfy9wcgwqy+Ka4G6oIrqrKLeB/2MxW94BjNcE2h66hxAS1BVEQ78uTLLJUiHs+udTb1bLziiIpch85xlkvRR2rCiK5RaENUZFSklflyKArERsTXKLSRUtRLF1YSRd30jSV23oLxg6QUTY8kXVoZFG366UqbdsaKeFFSivjGihIpGsr7dsglp4oPklYkPdZlUOS+S41I74K+ISsy0uWVQRHf/MWq/luLRLGiTqrVlkER3wyy+6J9lnetE4+SovST9m8UZex0VStiC43kyO+v3rGspIjvyf2ZIteV+7LPK+qMe4OgVq9O05mrFU2EDaF1tpFG67yapCgdH1SKlm5jU6/N17vhuTI5+W9dKcOnFZmWdV0ase3WZfZxmhw6STdHqahKBwTRRJEvbKTRh6yonhrvKBaJZkez7zh2eB2W1fI8S78iVjohYf4WjU9KRXxX8bUeI7aR5qAsohiyotSAR7lIFCJcR+v3FNEWcUdRkzWiaDNIg64WEaepLqQIN4q2wpP2833XnL+qiI3xW/EvHPiPQjSOZW8UbQQZL6+I7+KLlQSSMi3cKDKEvSivrijgET+JfWyQqXHy8VbRiL+wtSr6tJJlbn2KeMT/TlLYa0LjXr5bRY2HFN1EtIkVB21HDird4yzi+G0o4b+bDAOlx4NCtiL+TnCmchJrV89zq0hY8MpUFIbjq4frnzwemq97wXX6f7MwHqO3Hu+2w32nO/lcfcyOl/eoc3Qv6PNt6fx2sMpr+zmaShF/0kRFYR/l+guZsHmEVb/4p25n+D1aDwLN81cRYbe62ajWa8F8PdruEyONqDcWNjGqyOURn/cU+Y9CtP3EQaGowdo4uXBFR/806WzHvVq9oXv+/IfUg95oeJisjomikeXFNRWnYl32wnZ0jWUVioy2RbzohWKzVmQsmv9IzC20IsPJataPHnZxbmB/8wp/FpWitXNcdYfj+XKhsY/6K4TPYy1sWuLdW/KxrKabGiki4WtGbJevbuYufjh6bHlE306jWvz2bZ93L/MgPUl1vet8+mZ4XXJ/pCCb/XiwWfwvehjuYjMY7f+7ywIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4pfwBvz5EeFzYJDAAAAABJRU5ErkJggg=='
            className='logo' alt='nadmin'/>
        </div>
        <div className="topbarright">
            <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language/>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Settings/>
            </div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0KlX0HFKywD2AVCwvlTET1WK2lITYAB8sQ&usqp=CAU'
            className='topbarAvatar' alt=''/>
        </div>
      </div>
    </div>
  )
}
