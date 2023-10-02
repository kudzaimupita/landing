import React, { Component, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Button, Drawer } from 'antd';
import {
  MdOutlineDocumentScanner,
  MdOutlineLocalHotel,
  MdOutlineRealEstateAgent,
  MdPointOfSale,
  MdPrecisionManufacturing,
  MdSchool,
  MdShoppingBag,
} from 'react-icons/md';
import { RiGovernmentLine, RiHealthBookLine } from 'react-icons/ri';
import { TbBuildingBank } from 'react-icons/tb';

function ServiceTwo() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const industries = [
    {
      title: 'Education',
      shortDescription:
        'Learning management systems (LMS), student information systems (SIS), and online course platforms',
      color: 'one',
      component: (
        <>
          {' '}
          <ul className='price-feture'>
            <li>1 site</li>
            <li>5 User Groups</li>
            <li>10 modules</li>
            {/* <li>20 Portal Users </li> */}
            <li>5 Data Capture Forms</li>
            <li>5 Task Automations</li>
            <li>Unlimited Document Builder</li>
            <li>No Virtual Fields</li>
            <li>5 Insights Per Module</li>
            <li>5 Hook Actions Per Module</li>
            <li>3 Header Analytics Per Module</li>
            <li>1GB Storage Per Module</li>
            <li>3000 Alerts Per Month</li>
            <li>14 Day Log Retention</li>
            <li>No Field Level Security</li>
            <li>No Broadcasts</li>
            <li>No Document Restore</li>
            <li>Basic reports</li>
            <li>12 Hour Free System Setup</li>

            <li>No Feed</li>
          </ul>
        </>
      ),
      header:
        'Our custom ERP solution is designed to revolutionize the way educational institutions manage their operations. From K-12 schools to higher education universities, we offer a comprehensive suite of tools to streamline administrative tasks, enhance learning experiences, and improve overall efficiency within the education sector.',
      icon: <MdSchool className='color__one' style={{ color: 'red' }} />,
      keyPoints: [
        'Streamlined Administrative Tasks: Simplify administrative processes, including student record management, admissions, and financial transactions, to reduce paperwork and manual data entry.',
        'Learning Management Integration: Seamlessly integrate with Learning Management Systems (LMS) to track student progress, assignments, and grades within the ERP.',
        'Student Information Management: Maintain accurate student records, including attendance, performance, and demographics, and generate reports and transcripts.',
        'Resource Allocation and Planning: Efficiently allocate classrooms, teachers, and course materials, and plan class schedules and faculty assignments.',
        'Financial Management: Monitor budgets, expenses, and tuition payments, and generate financial reports for revenue, expenses, and forecasts.',
        'Parent and Student Portals: Provide secure online portals for parents and students to access grades, assignments, and announcements, improving communication.',
        'Staff Management: Streamline HR processes, including payroll, benefits administration, and recruitment, and manage faculty and staff records.',
        'Compliance and Reporting: Ensure compliance with education regulations and reporting requirements, with customizable reports for accreditation and audits.',
        'Scalability: Scale to meet the needs of educational institutions of all sizes, adding modules and features as institutions grow.',
        'Data Security and Privacy: Maintain high data security and privacy standards to protect sensitive student and staff information, complying with data protection regulations.',
        'Training and Support: Offer comprehensive training and support services for smooth implementation and ongoing success, including online resources and dedicated customer support.',
        'Customization and Integration: Tailor the ERP to meet specific institution needs and integrate with existing systems and tools.',
        'Enhanced Decision-Making: Utilize data analytics and reporting tools for data-driven decisions that improve educational outcomes and operational efficiency.',
      ],
    },
    {
      keyPoints: [
        'Streamlined Patient Data Management: Simplify the management of patient records, appointments, and billing, reducing administrative workload.',
        'Integration with Healthcare Systems: Seamlessly integrate with Electronic Health Records (EHR) and other healthcare systems for centralized data access.',
        'Telemedicine Support: Facilitate telemedicine consultations and remote healthcare services, expanding access to medical care.',
        'Patient Engagement Tools: Provide patient portals for scheduling appointments, requesting prescription refills, and secure communication with healthcare providers.',
        'Clinical Workflow Optimization: Improve clinical processes, such as appointment scheduling, prescription management, and patient charting.',
        'Resource Allocation: Efficiently allocate resources, including rooms, medical equipment, and staff, to optimize healthcare delivery.',
        'Financial Management: Monitor budgets, expenses, and revenue, generating financial reports for better financial control.',
        'Data Security and HIPAA Compliance: Maintain stringent data security and compliance with HIPAA regulations to safeguard patient information.',
        'Staff Management: Streamline HR functions, including payroll, benefits administration, and staff scheduling.',
        'Compliance and Reporting: Ensure compliance with healthcare regulations and generate reports for audits and accreditations.',
        'Scalability: Scale the ERP to accommodate healthcare institutions of various sizes, expanding features and modules as needed.',
        'Training and Support: Offer comprehensive training and support resources for successful implementation and ongoing healthcare operations.',
        'Customization and Integration: Tailor the ERP to fit the unique workflows and integrate with existing healthcare systems and tools.',
        'Data Analytics for Healthcare: Utilize data analytics tools to make informed decisions, improve patient care, and enhance operational efficiency.',
      ],
      title: 'Healthcare',
      shortDescription:
        'Electronic Health Records (EHR), patient management, and telemedicine platforms.',
      color: 'three',
      icon: (
        <RiHealthBookLine className='color__three' style={{ color: 'green' }} />
      ),
    },
    {
      title: 'Finance ',
      shortDescription:
        'Financial management, payment processing, and investment platforms.',
      color: '',
      component: <>erfrefrefe</>,
      icon: <TbBuildingBank className='color__' style={{ color: 'orange' }} />,
      keyPoints: [
        'Financial Management: Streamline financial processes, including budgeting, expense tracking, and financial reporting for better financial control.',
        'Payment Processing: Provide secure and efficient payment processing solutions for businesses and financial transactions.',
        'Wealth Management: Offer wealth management and investment platforms for financial advisors and investors to manage portfolios.',
        'Robo-Advisors: Implement robo-advisors for automated investment advice and portfolio management.',
        'Personal Finance: Develop personal finance apps for individuals to budget, track expenses, and plan for financial goals.',
        'Invoice Management: Simplify invoice creation, delivery, and tracking for businesses and clients.',
        'Expense Reconciliation: Automate expense reconciliation processes to reduce errors and save time.',
        'Compliance and Regulation: Ensure compliance with financial regulations, such as Sarbanes-Oxley (SOX) and Dodd-Frank Act.',
        'Financial Analytics: Provide robust financial analytics tools for data-driven decision-making and portfolio analysis.',
        'Risk Management: Help businesses assess and manage financial risks, including credit risk and market risk.',
        'Asset Management: Offer asset management solutions to track and optimize asset portfolios.',
        'Tax Management: Facilitate tax planning, reporting, and compliance for businesses and individuals.',
        'Mobile Banking: Develop mobile banking apps for customers to access accounts, transfer funds, and make payments on the go.',
        'Multi-Currency Support: Enable multi-currency transactions and foreign exchange management for international businesses.',
      ],
    },
    {
      title: 'Retail',
      shortDescription:
        'Inventory management, e-commerce platforms, and POS systems',
      color: 'two',
      component: <>erfrefrefe</>,
      icon: <MdShoppingBag style={{ color: 'indigo' }} />,
      keyPoints: [
        'Inventory Management: Optimize inventory levels, reduce costs, and prevent stockouts with robust inventory management tools.',
        'E-commerce Platforms: Develop e-commerce solutions with online catalog management, secure transactions, and order processing.',
        'Point of Sale (POS) Systems: Provide efficient in-store POS systems for streamlined transaction processing and inventory management.',
        'Multi-Channel Sales: Support sales across various channels, including brick-and-mortar stores, e-commerce websites, and mobile apps.',
        'Customer Relationship Management (CRM): Implement CRM modules to track customer preferences, purchase histories, and loyalty programs.',
        'Supply Chain Optimization: Enhance supply chain management to ensure products are readily available in stores and online.',
        'Financial Management: Offer comprehensive financial modules for budgeting, expense tracking, and financial reporting.',
        'Employee Management: Streamline HR and workforce management, including scheduling, payroll processing, and performance tracking.',
        'Business Intelligence (BI) and Analytics: Provide data analytics and reporting capabilities to identify sales trends, popular products, and areas for improvement.',
        'Loss Prevention: Implement security and surveillance integrations, along with inventory control, to monitor and reduce theft and shrinkage.',
        'Omnichannel Experience: Create a seamless shopping experience for customers by integrating online and in-store sales data.',
        'Promotions and Loyalty Programs: Enable targeted promotions, discounts, and loyalty programs to increase customer retention.',
        'Vendor and Supplier Management: Streamline vendor relationships and automate reordering processes for efficient procurement.',
        'Personalized Marketing: Utilize customer data for personalized marketing campaigns and product recommendations.',
      ],
    },
    {
      title: 'Manufacturing and Supply Chain',
      shortDescription:
        'Manufacturing execution, supply chain management, and quality control software.',
      color: 'four',
      component: <>erfrefrefe</>,
      icon: <MdPrecisionManufacturing style={{ color: 'orange' }} />,
      keyPoints: [
        'Manufacturing Execution Systems (MES): Improve production tracking and quality control with MES integration.',
        'Supply Chain Management: Streamline supply chain operations for optimized inventory, procurement, and order fulfillment.',
        'Quality Control: Implement quality control processes to ensure product consistency and compliance with standards.',
        'Product Lifecycle Management (PLM): Manage product design, development, and documentation throughout the lifecycle.',
        'Inventory Optimization: Optimize inventory levels and distribution to minimize holding costs and prevent stockouts.',
        'Demand Forecasting: Utilize demand forecasting tools to predict future product demand and optimize production schedules.',
        'Asset Maintenance: Implement asset maintenance and monitoring solutions to maximize equipment uptime and performance.',
        'Supplier Relationship Management (SRM): Strengthen supplier relationships and enhance procurement efficiency.',
        'Cost Analysis: Analyze production costs, including labor, materials, and overhead, to improve cost-efficiency.',
        'Logistics and Distribution: Enhance logistics and distribution processes for timely and cost-effective product delivery.',
        'Compliance and Quality Assurance: Ensure compliance with industry regulations and maintain high-quality standards.',
        'Batch and Lot Tracking: Enable batch and lot tracking to trace products through the supply chain and address recalls quickly.',
        'Resource Allocation: Efficiently allocate resources, including labor, machines, and materials, for optimal production.',
        'Lean Manufacturing: Implement lean manufacturing principles to eliminate waste and improve process efficiency.',
      ],
    },
    {
      title: 'Hospitality and Travel',
      shortDescription:
        'Hotel management, travel booking, and restaurant POS systems',
      color: 'eight',
      icon: <MdOutlineLocalHotel style={{ color: 'light-blue' }} />,
      keyPoints: [
        'Hotel Management: Streamline hotel operations, including room reservations, check-ins, check-outs, and guest services.',
        'Travel Booking Platforms: Develop travel booking solutions for flights, hotels, vacation packages, and rental cars.',
        'Restaurant POS Systems: Provide efficient POS systems for restaurant order management and guest experience improvement.',
        'Online Reservations: Enable online reservations for hotels, restaurants, and other hospitality services to enhance guest convenience.',
        'Customer Relationship Management (CRM): Implement CRM modules to track guest preferences, special requests, and loyalty programs.',
        'Inventory and Resource Management: Optimize the allocation of rooms, staff, and resources to maximize hotel occupancy and revenue.',
        'Housekeeping and Maintenance: Manage housekeeping schedules, maintenance requests, and room inspections for a seamless guest experience.',
        'Billing and Invoicing: Automate billing processes, invoicing, and payment collection for guest services and amenities.',
        'Guest Feedback and Surveys: Gather guest feedback and conduct surveys to continuously improve service quality.',
        'Travel Itinerary Management: Offer tools for travelers to plan and manage their itineraries, including flights, accommodations, and activities.',
        'Event and Conference Management: Assist in organizing events, conferences, and meetings within hotel facilities.',
        'Centralized Booking and Distribution: Centralize booking and distribution channels to ensure consistent pricing and availability.',
        'Multi-Language and Currency Support: Cater to international travelers with support for multiple languages and currencies.',
        'Mobile Check-in and Check-out: Enhance guest experience with mobile check-in and check-out capabilities.',
      ],
    },
    {
      title: 'Real Estate',
      shortDescription:
        ' Property management, real estate CRM, and mortgage origination software',
      color: 'three',
      component: <>erfrefrefe</>,
      icon: <MdOutlineRealEstateAgent style={{ color: 'green' }} />,
      keyPoints: [
        'Property Management: Streamline property management tasks, including rental property tracking, tenant management, and maintenance requests.',
        'Real Estate CRM: Implement a powerful CRM system for lead generation, client management, and property listings.',
        'Mortgage and Loan Origination: Offer software solutions for lenders and brokers to manage the mortgage origination process.',
        // "Virtual Property Tours: Provide virtual property tours and 3D visualizations to enhance property viewing and marketing.",
        'Property Analytics: Utilize property analytics tools to assess property values, rental income potential, and market trends.',
        'Lease Management: Simplify lease management processes, including lease agreements, renewals, and rent collection.',
        'Property Marketing: Enhance property marketing with listing management, online advertising, and social media integration.',
        'Tenant Portals: Offer tenant portals for online rent payments, maintenance requests, and communication with property managers.',
        'Document Management: Streamline document storage, retrieval, and e-signature processes for contracts and agreements.',
        'Real Estate Investment: Provide tools for real estate investors to analyze property investments and make informed decisions.',
        'Vacation Rental Management: Support vacation rental property management, booking, and guest communication.',
        'Property Inspection: Conduct property inspections and track inspection reports to ensure property maintenance.',
        'Tenant Screening: Implement tenant screening and background checks for rental applications.',
        'Compliance and Regulations: Stay compliant with real estate regulations and licensing requirements.',
      ],
    },
    {
      title: 'Legal and Compliance',
      shortDescription:
        'Legal case management, document management, and contract lifecycle software.',
      color: 'seven',
      component: <>erfrefrefe</>,
      icon: <MdOutlineDocumentScanner style={{ color: 'red' }} />,
      keyPoints: [
        'Case Management: Streamline case tracking, document management, and task assignments for legal cases.',
        'Contract Lifecycle Management (CLM): Simplify contract creation, negotiation, and management processes.',
        'Legal Research and Analysis: Provide AI-powered legal research tools for faster and more accurate legal analysis.',
        'Document Management: Efficiently store, retrieve, and organize legal documents, pleadings, and evidence.',
        'Client and Matter Management: Manage client relationships, matter assignments, and billing in one integrated system.',
        'Compliance Tracking: Ensure compliance with legal regulations, industry standards, and court deadlines.',
        'Billing and Invoicing: Automate billing processes, invoicing, and payment collection for legal services.',
        'Time and Expense Tracking: Track billable hours and expenses associated with legal cases and clients.',
        'Legal Reporting and Analytics: Generate reports and analytics to assess case performance, profitability, and trends.',
        'E-Discovery Support: Assist in the e-discovery process, including data collection, processing, and document review.',
        'Legal Workflow Automation: Automate repetitive legal processes and workflows for improved efficiency.',
        'Conflict of Interest Management: Identify and mitigate conflicts of interest among clients and cases.',
        'Client Portal: Offer secure client portals for document sharing, communication, and collaboration.',
        'Mobile Access: Provide mobile access to legal professionals for case updates and client interactions.',
      ],
    },
    {
      title: 'Government and Public Sector',
      shortDescription:
        'Citizen engagement, permitting, and public health systems',
      color: 'two',
      component: <>erfrefrefe</>,
      icon: <RiGovernmentLine style={{ color: 'indigo' }} />,
      keyPoints: [
        'Citizen Engagement: Enhance citizen engagement with user-friendly online portals and digital services.',
        'Public Service Delivery: Improve public service delivery through efficient case management and automation.',
        'Permitting and Licensing: Simplify permitting and licensing processes for businesses and citizens.',
        'Regulatory Compliance: Ensure compliance with government regulations, reporting requirements, and audits.',
        'E-Government Solutions: Develop e-government solutions for digital document submission, tax payments, and voting.',
        'Government Finance: Streamline government financial management, budgeting, and accounting processes.',
        'Human Resources Management: Manage government workforce with HR solutions, payroll processing, and performance evaluation.',
        'Emergency Response: Facilitate emergency response coordination, communication, and resource allocation.',
        'Public Health Management: Support public health initiatives with data analytics, vaccine tracking, and disease surveillance.',
        'Citizen Feedback and Surveys: Collect citizen feedback and conduct surveys to improve services and policy decisions.',
        'Digital Accessibility: Ensure digital accessibility for citizens with disabilities to access government services.',
        'Data Security and Privacy: Maintain strict data security and privacy standards to protect sensitive citizen information.',
        'Online Voting Systems: Implement secure online voting systems for convenient and efficient elections.',
        'Government Transparency: Promote government transparency with open data initiatives and reporting dashboards.',
      ],
    },
  ];
  return (
    <React.Fragment>
      <Drawer
        width={700}
        title={selectedItem?.title}
        placement='right'
        onClose={onClose}
        open={open}
      >
        <p
          className='description'
          style={{ fontSize: '14px', lineHeight: '18px' }}
        >
          {selectedItem?.shortDescription}
        </p>
        <ul className='price-feture'>
          {selectedItem?.keyPoints?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Drawer>
      <div className='service'>
        <div className='container'>
          <SectionTitle
            // firstTitle="Features"
            lastTitle='Industry Use Cases'
            description='Discover How Our Solutions Benefit Different Sectors.'
          />
          <div className='row'>
            {industries?.map((industry) => {
              return (
                <div className='col-lg-3 col-md-6 col-sm-6'>
                  <div
                    className='tt-icon-box style-three wow fadeInUp'
                    data-wow-delay='0.9s'
                  >
                    <div className={'icon-container color__' + industry?.color}>
                      {industry?.icon}
                    </div>
                    <div className='box-content'>
                      <h4 className='box-title'>
                        <a href='#'>{industry?.title}</a>
                      </h4>

                      <p
                        className='description'
                        style={{ fontSize: '14px', lineHeight: '18px' }}
                      >
                        {industry?.shortDescription}
                      </p>
                      <a
                        href='#'
                        className='tt-more-link'
                        onClick={() => {
                          setSelectedItem(industry);
                          setOpen(true);
                        }}
                      >
                        Read More<i className='feather-arrow-right'></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ServiceTwo;
