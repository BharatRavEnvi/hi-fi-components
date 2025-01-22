const tabsConfig = [
  {
    id: 0,
    label: "Organization Details",
  },
  {
    id: 1,
    label: "Admin Management",
  },
  {
    id: 2,
    label: "Facilities & Users",
  },
  {
    id: 3,
    label: "Software Details",
  },
  {
    id: 4,
    label: "My Profile",
  },
];

const basicDetailsInfo = [
  {
    type: "heading",
    value: "Basic Detail",
  },
  {
    label: "Organization Legal Name",
    key: "organizationLegalName",
    value: "Acme Corporation Pvt. Ltd.",
    type: "info",
  },
  {
    label: "Abbreviated Name",
    key: "abbreviatedName",
    value: "ACPL",
    type: "info",
  },
  {
    label: "Corporate Identity Number",
    key: "corporateIdentityNumber",
    value: "123456789",
    type: "info",
  },
  {
    label: "Year of Incorporation",
    key: "yearOfIncorporation",
    value: "2015",
    type: "info",
  },
  {
    value: "Organization Info",
    type: "heading",
  },
  {
    label: "Industry Type",
    key: "industryType",
    value: "Technology",
    type: "info",
  },
  {
    label: "Nature of Ownership",
    key: "natureOfOwnership",
    value: "Private Limited",
    type: "info",
  },
  {
    label: "Employment Types",
    key: "employmentType",
    value: "Full Time, Part Time",
    type: "info",
  },
  {
    label: "Number of Employees",
    key: "numberOfEmployees",
    value: "2000",
    type: "info",
  },
  {
    type: "heading",
    value: "Equity Info",
  },
  {
    label: "Financial Year",
    key: "financialYear",
    value: "2022-2023",
    type: "info",
  },
  {
    label: "Stocks and Shares",
    key: "stocksAndShares",
    value: "Listed on NSE, 500,000 Shares",
    type: "info",
  },
  {
    label: "Paid Up Capital",
    key: "paidUpCapital",
    value: "₹ 200,000,000",
    type: "info",
  },
  {
    label: "Number of Employees",
    key: "numberOfEmployees",
    value: "2000",
    type: "info",
  },
  {
    type: "heading",
    value: "Online or Social Presence",
  },
  {
    label: "Official Company Website URL",
    key: "officialCompanyWebsiteURL",
    value: "https://www.acmecorp.com",
    type: "info",
  },
  {
    label: "LinkedIn",
    key: "linkedIn",
    value: "https://www.acmecorp.com",
    type: "info",
  },
];
const basicDetailsFormConfig = [
  {
    key: "basicDetailsLabel",
    label: "Basic Detail",
    type: "textLabel",
    spanTwoColumns: true,
  },

  {
    label: "Organization Legal Name",
    key: "organizationLegalName",
    placeholder: "Acme Corporation Pvt. Ltd.",
    type: "text",
  },
  {
    label: "Abbreviated Name",
    key: "abbreviatedName",
    placeholder: "ACPL",
    type: "text",
  },
  {
    label: "Corporate Identity Number",
    key: "corporateIdentityNumber",
    placeholder: "123456789",
    type: "text",
  },
  {
    label: "Year of Incorporation",
    key: "yearOfIncorporation",
    placeholder: "2015",
    type: "date",
  },

  {
    key: "organizationInfoLabel",
    label: "Organization Info",
    type: "textLabel",
    spanTwoColumns: true,
  },
  {
    label: "Industry Type",
    key: "industryType",
    placeholder: "Technology",
    type: "text",
  },
  {
    label: "Nature of Ownership",
    key: "natureOfOwnership",
    placeholder: "Private Limited",
    type: "text",
  },
  {
    label: "Number of Employees",
    key: "numberOfEmployees",
    placeholder: "250",
    type: "number",
  },
  {
    label: "Employment Types",
    key: "employmentType",
    placeholder: "Full Time, Part Time",
    type: "text", //TODO:make it multiSelect
  },
  {
    key: "equityInfoLabel",
    label: "Equity Info",
    type: "textLabel",
    spanTwoColumns: true,
  },

  {
    label: "Financial Year",
    key: "financialYear",
    placeholder: "2022-2023",
    type: "date",
  },
  {
    label: "Stocks and Shares",
    key: "stocksAndShares",
    placeholder: "Listed on NSE, 500,000 Shares",
    type: "text",
  },
  {
    label: "Paid Up Capital",
    key: "paidUpCapital",
    placeholder: "₹ 200,000,000",
    type: "text",
  },

  {
    key: "onlineSocialPresence",
    type: "textLabel",
    spanTwoColumns: true,
    label: "Online or Social Presence",
  },
  {
    label: "Official Company Website URL",
    key: "officialCompanyWebsiteURL",
    placeholder: "https://www.acmecorp.com",
    type: "text",
  },
  {
    label: "LinkedIn",
    key: "linkedIn",
    placeholder: "https://www.acmecorp.com",
    type: "text",
  },
];
const billingInfo = [
  {
    type: "heading",
    value: "Postal Address",
  },
  {
    label: "Registered Office Address (Line 1)",
    key: "addressLine1",
    value: "123 Main Street",
    type: "info",
  },
  {
    label: "Registered office address (Line 2)",
    key: "addressLine2",
    value: "Suite 456",
    type: "info",
  },
  { label: "Country", key: "country", value: "India", type: "info" },
  { label: "State", key: "state", value: "Maharashtra", type: "info" },
  { label: "City", key: "city", value: "Mumbai", type: "info" },
  { label: "Zip Code", key: "zipCode", value: "400001", type: "info" },

  {
    label: "Same as postal address",
    key: "sameAsPostalAddress",
    value: "false",
    type: "checkbox",
  },
  {
    type: "heading",
    value: "Billing Address",
  },

  {
    label: "Registered Office Address (Line 1)",
    key: "addressLine1",
    value: "123 Main Street",
    type: "info",
  },
  {
    label: "Registered office address (Line 2)",
    key: "addressLine2",
    value: "Suite 456",
    type: "info",
  },
  { label: "Country", key: "country", value: "India", type: "info" },
  { label: "State", key: "state", value: "Maharashtra", type: "info" },
  { label: "City", key: "city", value: "Mumbai", type: "info" },
  { label: "Zip Code", key: "zipCode", value: "400001", type: "info" },
  {
    type: "heading",
    value: "Contact Details",
  },
  {
    label: "Mobile Number",
    key: "mobileNumber",
    value: "1234567890",
    type: "info",
  },
  {
    label: "Billing Contact Number",
    key: "billingContactNumber",
    value: "1234567890",
    type: "info",
  },
];
const billingFormConfig = [
  {
    key: "postalAddressLabel",
    label: "Postal Address",
    type: "textLabel",
    spanTwoColumns: true,
  },

  {
    label: "Registered Office Address (Line 1)",
    key: "postalAddress.addressLine1",
    required: false,
    placeholder: "123 Main Street",
    type: "text",
  },
  {
    label: "Registered office address (Line 2)",
    key: "postalAddress.addressLine2",
    required: false,
    placeholder: "Suite 456",
    type: "text",
  },
  {
    label: "Country",
    key: "postalAddress.country",
    required: false,
    placeholder: "India",
    type: "select",
  },
  {
    label: "State",
    key: "postalAddress.state",
    required: false,
    placeholder: "Maharashtra",
    type: "select",
  },
  {
    label: "City",
    key: "postalAddress.city",
    required: false,
    placeholder: "Mumbai",
    type: "select",
  },
  {
    label: "Zip Code",
    key: "postalAddress.zipCode",
    required: false,
    placeholder: "400001",
    type: "number",
  },
  {
    key: "billingAddressLabel",
    label: "Billing Address",
    type: "textLabel",
    spanTwoColumns: true,
  },
  {
    label: "",
    key: "sameAsPostalAddress",
    required: false,
    placeholder: "Same as postal address",
    type: "checkbox",
    spanTwoColumns: true,
  },

  {
    label: "Registered Office Address (Line 1)",
    key: "billingAddress.addressLine1",
    required: false,
    placeholder: "123 Main Street",
    type: "text",
  },

  {
    label: "Registered office address (Line 2)",
    key: "billingAddress.addressLine2",
    required: false,
    placeholder: "Suite 456",
    type: "text",
  },
  {
    label: "Country",
    key: "billingAddress.country",
    required: false,
    placeholder: "India",
    type: "select",
  },
  {
    label: "State",
    key: "billingAddress.state",
    required: false,
    placeholder: "Maharashtra",
    type: "select",
  },
  {
    label: "City",
    key: "billingAddress.city",
    required: false,
    placeholder: "Mumbai",
    type: "select",
  },
  {
    label: "Zip Code",
    key: "billingAddress.zipCode",
    required: false,
    placeholder: "400001",
    type: "text",
  },
  {
    key: "contactDetailsLabel",
    label: "Contact Details",
    type: "textLabel",
    spanTwoColumns: true,
  },

  {
    label: "Mobile Number",
    key: "mobileNumber",
    required: false,
    placeholder: "1234567890",
    type: "phone",
  },
  {
    label: "Billing Contact Number",
    key: "billingContactNumber",
    required: false,
    placeholder: "1234567890",
    type: "number",
  },
];
const contactInfo = [
  {
    type: "heading",
    value: "Basic Detail",
  },
  {
    label: "Full Name",
    key: "fullName",
    type: "info",
    value: "Acme Corporation Pvt. Ltd.",
  },
  { label: "Email", key: "email", type: "info", value: "johndoe@example.com" },
  {
    label: "Company Name",
    key: "companyName",
    type: "info",
    value: "Company Name",
  },
  {
    label: "Mailing Address",
    key: "mailingAddress",
    type: "info",
    value: "123 Main Street, Suite 456 Springfield, IL 62704",
  },
  {
    label: "Contact Number",
    key: "contactNumber",
    type: "info",
    value: "Contact Number",
  },
  {
    label: "Job Title",
    key: "jobTitle",
    type: "info",
    value: "Senior Project Manager",
  },
  {
    type: "heading",
    value: "Corporate Identity and Outreach",
  },
  {
    label: "Office Fax",
    key: "officeFax",
    type: "info",
    value: "+1-234-567-8901",
  },
  {
    label: "LinkedIn",
    key: "linkedIn",
    type: "info",
    value: "https://www.linkedin.com/in/johndoe",
  },
  {
    label: "Twitter",
    key: "twitter",
    type: "info",
    value: "@CompanyName",
  },
  {
    label: "Sustainability Blog",
    key: "sustainabilityBlog",
    type: "info",
    value: "https://www.companyname.com/sustainability-blog",
  },
  {
    label: "ESG Certification",
    key: "esgCertification",
    type: "info",
    value: "Community Recycling Program, Employee Volunteering ",
  },
  {
    label: "CSR Initiatives",
    key: "csrInitiatives",
    type: "info",
    value: "Community Recycling Program, Employee Volunteering ",
  },
];
const contactFormConfig = [
  {
    key: "basicInfoLabel",
    label: "Basic",
    type: "textLabel",
    spanTwoColumns: true,
  },
  {
    key: "fullName",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "John Doe",
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "johndoe@example.com",
  },
  {
    key: "companyName",
    label: "Company Name",
    type: "text",
    required: true,
    placeholder: "Acme Corporation",
    spanTwoColumns: true,
  },

  {
    key: "contactNumber",
    label: "Contact Number",
    type: "phone",
    required: true,
    placeholder: "+1-234-567-8901",
  },
  {
    key: "jobTitle",
    label: "Job Title",
    type: "text",
    required: true,
    placeholder: "Senior Project Manager",
  },
  {
    key: "userInfoLabel",
    label: "Corporate Identity and Outreach",
    type: "textLabel",
    spanTwoColumns: true,
  },
  {
    key: "officeFax",
    label: "Office Fax",
    type: "text",
    required: false,
    placeholder: "+1-234-567-8901",
  },
  {
    key: "linkedIn",
    label: "LinkedIn",
    type: "text",
    required: false,
    placeholder: "https://www.linkedin.com/in/johndoe",
  },
  {
    key: "twitter",
    label: "Twitter",
    type: "text",
    required: false,
    placeholder: "@CompanyName",
  },
  {
    key: "sustainabilityBlog",
    label: "Sustainability Blog",
    type: "text",
    required: false,
    placeholder: "https://www.companyname.com/sustainability-blog",
  },
  {
    key: "esgCertification",
    label: "ESG Certification",
    type: "text",
    required: false,
    placeholder: "Community Recycling Program, Employee Volunteering",
  },
  {
    key: "csrInitiatives",
    label: "CSR Initiatives",
    type: "text",
    required: false,
    placeholder: "Community Recycling Program, Employee Volunteering",
  },
];
const entityInfo = [
  {
    type: "heading",
    value: "Entity",
  },
  {
    label: "Entity Name",
    key: "entityName",
    value: "Acme Corporation Pvt. Ltd.",
    type: "info",
  },
  {
    label: "Type of Entity",
    key: "typeOfEntity",
    value: "Subsidiary",
    type: "info",
  },
  {
    label: "Date of Incorporation",
    key: "dateOfIncorporation",
    value: "1st Jan, 2017",
    type: "info",
  },
  {
    label: "Share Percentage",
    key: "sharePercentage",
    value: "20%",
    type: "info",
  },
  {
    label: "Business Operation",
    key: "businessOperation",
    value: "",
    type: "info",
  },
  {
    label: "Mailing Address",
    key: "mailAddress",
    value: "123 Main Street, Suite 456 Springfield, IL 62704",
    type: "info",
  },
  {
    label: "Enable emission calculation for this entity of the company",
    key: "enableEmission",
    value: "true",
    type: "checkbox",
  },
];
const entityFormConfig = [
  {
    key: "entityName",
    label: "Entity Name",
    type: "text",
    required: false,
    placeholder: "John Doe",
  },
  {
    key: "typeOfEntity",
    label: "Type of Entity",
    type: "select",
    required: false,
    placeholder: "Subsidiary",
  },
  {
    key: "dateOfIncorporation",
    label: "Date of Incorporation",
    type: "date",
    required: false,
    placeholder: "2000",
  },
  {
    key: "sharePercentage",
    label: "Share Percentage",
    type: "percentage",
    required: false,
    placeholder: "50%",
  },
  {
    key: "businessOperation",
    label: "Business Operation",
    type: "text",
    required: false,
    placeholder: "2000",
  },
  {
    key: "mailAddress",
    label: "Mailing Address",
    type: "text",
    required: false,
    placeholder: "123 Main Street, Suite 456 Springfield, IL 62704",
  },

  {
    key: "enableEmission",
    label: "",
    type: "checkbox",
    required: false,
    placeholder: "Enable emission calculation for this entity of the company",
  },
];
export {
  tabsConfig,
  billingInfo,
  billingFormConfig,
  contactInfo,
  contactFormConfig,
  entityInfo,
  entityFormConfig,
  basicDetailsInfo,
  basicDetailsFormConfig,
};
