import { Grid } from '@chakra-ui/react'
import React from 'react'

const data =[
    {
        img_url:"https://res.cloudinary.com/spiralyze/image/upload/v1655459455/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/time-tracking.svg",
        heading:"Time Tracking",
        desc:"Start and stop tracking with 1-click. Apps for desktop, mobile, and web browser."
    },
    {
        img_url:"https://res.cloudinary.com/spiralyze/image/upload/v1655459455/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Reminders.svg",
        heading:"Reminders",
        desc:"Subtle reminders to track time. Never lose another hour."
    },
    {
        img_url:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Invoicing.svg",
        heading:"Invoicing",
        desc:"Automatically create invoices from tracked time and expenses."
    },
    {
        img_url:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Online-Payments.svg",
        heading:"Online Payments",
        desc:"Accept online payments. Sync with QuickBooks and Xero."
    },
    {
        img_url:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Reporting.svg",
        heading:"Reporting",
        desc:"Create reports across projects. Budgets, time, team capacity, cost breakdowns, etc."
    },
    {
        img_url:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Integrations.svg",
        heading:"Integrations",
        desc:"Integrate with 50+ apps including Asana, Basecamp, Trello, Slack, and more."
    },
    {
        img_url:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Budgets.svg",
        heading:"Budgets",
        desc:"Monitor project budgets. Get early alerts when projects take longer than budgeted."
    },
    {
        img_url:"https://res.cloudinary.com/spiralyze/image/upload/v1655459456/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Cost-Tracking.svg",
        heading:"Cost Tracking",
        desc:"See how much every project costs to complete. Drill down into details."
    },
    {
        img_url:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Expenses.svg",
        heading:"Expenses",
        desc:"Add project expenses in just a few clicks. Easily attach photos of receipts."
    },
]

const Features = () => {
  return (
    <div>
        <Grid templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}>
            
        </Grid>
    </div>
  )
}

export default Features