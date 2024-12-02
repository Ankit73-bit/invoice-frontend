export const API_URL = "http://127.0.0.1:8000/api/v1/invoices";

export const PAGE_SIZE = 10;

export const getApiUrl = (page = 1, limit = 10, additionalParams = {}) => {
  const searchParams = new URLSearchParams({
    page,
    limit,
    ...additionalParams, // Spread other additionalParams directly
  });

  return `http://127.0.0.1:8000/api/v1/invoices?${searchParams.toString()}`;
};

export const COMPANY_DETAILS = [
  {
    clientCompanyName: "Paras Print",
    add1: "Shop No-11, Bipin Shopping Centre,",
    add2: "Gaondevi Road, Milind Nagar,",
    add3: "Bhandup West,",
    pinCode: "Mumbai - 400078,",
    contact: 7977065435,
    mail: "info@parasprint.in",
    gstno: "27AMAPM0024G1ZM",
  },
  {
    clientCompanyName: "Paras Solutions",
    add1: "Shop No-11, Bipin Shopping Centre,",
    add2: "Gaondevi Road, Milind Nagar,",
    add3: "Bhandup West,",
    pinCode: "Mumbai - 400078,",
    contact: 7977065435,
    mail: "sales@parassolutions.in",
    gstno: "27BRMPM5517J1ZC",
  },
];

export const COMPANY_BANK_DETAILS = [
  {
    companyName: "Paras Print",
    bankName: "ICICI BANK",
    accNo: "098405500495",
    ifsc: "ICIC0000984",
    branchName: "BHANDUP WEST",
  },
  {
    companyName: "Paras Solutions",
    bankName: "INDUSUND BANK",
    accNo: "257977065435",
    ifsc: "INDB0000047",
    branchName: "Mulund WEST",
  },
];
