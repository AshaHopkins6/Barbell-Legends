import React from "react";
import Card from 'react-bootstrap/Card';

export default function LiftingRecordsCard() {
    return (
    <Card>
      <Card.Header as="h5">Lifting Records</Card.Header>
      <Card.Body className="bg-dark">
        <svg width="224" height="184" viewBox="0 0 224 184" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.7375 134.981C55.7375 160.461 80.9813 181.197 112 181.197C143.019 181.197 168.263 160.461 168.263 134.981C168.263 115.539 153.563 98.8641 132.781 92.0719C132.825 91.6766 132.869 91.3172 132.869 90.9219C132.869 82.7281 125.825 75.8641 116.419 74.175V69.0719H127.575C127.838 69.0719 128.1 69.0359 128.406 69C128.494 69 128.581 68.9641 128.669 68.9281C128.844 68.8922 129.019 68.8563 129.194 68.7844C129.281 68.7484 129.369 68.7125 129.5 68.6766C129.631 68.6047 129.806 68.5688 129.938 68.4969C130.025 68.461 130.113 68.3891 130.244 68.3531C130.288 68.3172 130.375 68.2813 130.419 68.2453L151.769 54.1938L151.944 54.05C152.075 53.9781 152.163 53.8703 152.294 53.7984C152.381 53.7266 152.469 53.6188 152.556 53.5469C152.644 53.4391 152.731 53.3672 152.819 53.2594C152.906 53.1516 152.95 53.0438 153.038 52.9359C153.081 52.8281 153.169 52.7203 153.213 52.6125L153.344 52.2891C153.388 52.1813 153.388 52.0734 153.431 51.9656C153.475 51.8578 153.475 51.7141 153.475 51.6063C153.475 51.5344 153.519 51.4984 153.519 51.4266V6.46875C153.519 4.45625 151.55 2.83907 149.1 2.83907H75.1188C72.6688 2.83907 70.7001 4.45625 70.7001 6.46875V51.3547C70.7001 51.4266 70.7 51.4625 70.7438 51.5344C70.7438 51.6781 70.7875 51.7859 70.7875 51.8938C70.8313 52.0016 70.8313 52.1094 70.875 52.2172L71.0063 52.5406C71.05 52.6484 71.0938 52.7563 71.1813 52.8641C71.225 52.9719 71.3125 53.0797 71.4 53.1875C71.4875 53.2953 71.575 53.4031 71.6625 53.475C71.75 53.5828 71.8375 53.6547 71.925 53.7266C72.0125 53.8344 72.1438 53.9063 72.275 53.9781C72.3188 54.0141 72.3626 54.0859 72.4501 54.1219L93.7563 68.1734C93.8 68.2094 93.8875 68.2453 93.9313 68.2813C94.0188 68.3531 94.1063 68.3891 94.2375 68.425C94.3688 68.4969 94.5 68.5688 94.675 68.6047C94.7625 68.6406 94.8501 68.6766 94.9813 68.7125C95.1563 68.7484 95.3313 68.8203 95.5063 68.8563C95.5938 68.8922 95.6813 68.8922 95.7688 68.9281C96.0313 68.9641 96.2938 69 96.6 69H107.756V74.1031C98.35 75.7563 91.3063 82.6563 91.3063 90.85C91.3063 91.2453 91.35 91.6047 91.3938 92C70.4813 98.8641 55.7375 115.503 55.7375 134.981ZM101.456 61.7766V10.0625H122.544V61.7766H101.456ZM144.463 49.5938L131.338 58.2188V10.0625H144.463V49.5938ZM92.6188 10.0625V58.2547L79.4938 49.6297V10.0625H92.6188ZM112 81.0031C118.213 81.0031 123.331 84.8844 123.944 89.8438C120.094 89.1609 116.069 88.7656 112 88.7656C107.888 88.7656 103.906 89.125 100.056 89.8438C100.669 84.8844 105.788 81.0031 112 81.0031ZM112 96.025C138.163 96.025 159.425 113.491 159.425 134.981C159.425 156.472 138.163 173.938 112 173.938C85.8376 173.938 64.5751 156.472 64.5751 134.981C64.5751 113.491 85.8376 96.025 112 96.025Z" fill="white"/>
        <path d="M76.3 131.783L94.15 142.456L87.3251 159.706C86.7563 161.216 87.3688 162.833 88.9438 163.767C90.5188 164.702 92.575 164.702 94.15 163.767L112 153.094L129.894 163.767C130.681 164.234 131.6 164.45 132.475 164.45C133.394 164.45 134.313 164.234 135.056 163.767C136.588 162.833 137.244 161.216 136.675 159.706L129.85 142.456L147.7 131.783C149.231 130.848 149.888 129.231 149.319 127.722C148.75 126.212 147.044 125.206 145.119 125.206H123.025L116.2 107.956C115.631 106.447 113.925 105.441 112 105.441C110.075 105.441 108.413 106.447 107.8 107.956L100.975 125.206H78.8813C76.9563 125.206 75.2938 126.212 74.6813 127.722C74.1125 129.231 74.7688 130.884 76.3 131.783ZM104.169 132.502C106.094 132.502 107.756 131.495 108.369 129.986L112 120.822L115.631 129.986C116.2 131.495 117.906 132.502 119.831 132.502H131.556L122.063 138.144C120.531 139.078 119.875 140.695 120.444 142.205L124.075 151.369L114.581 145.727C113.05 144.792 110.95 144.792 109.375 145.727L99.8813 151.369L103.513 142.205C104.081 140.695 103.469 139.078 101.894 138.144L92.4 132.502H104.169Z" fill="#FFFDFD"/>
        </svg>
      </Card.Body>
    </Card>
      
    )
  }