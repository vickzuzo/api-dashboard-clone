import React from "react";
import Layout from "../../components/layouts/Layout";
import { Breadcrumbs } from "../../components/breadcrumbs";
import {
  HomeIcon,
  VCalendarIcon,
  VCardChequeIcon,
  VCardPosIcon,
  VDocumentFilter,
  VDownloadIcon,
} from "../../components/icons";
import { SectionHeader } from "../../components/sectionHeader";
import Link from "next/link";
import { EmptyState } from "../../components/emptyState";
import Pagination from "../../components/pagination";
import StatusPill from "../../components/Pills/StatusPill";
import { Tab, Tabs } from "../../components/tab";
import Table, { TableData, TableHead, TableRow } from "../../components/table";
import { Button } from "../../components/forms";
import { PaymentChannel } from "../../components/PaymentChannel";

const PaymentHistoryPage = () => {
  return (
    <div>
      <div className="my-7">
        <Breadcrumbs
          items={[
            { title: "Home", icon: <HomeIcon />, to: "/dashboard" },
            { title: "Payment History", to: "/payment-history" },
          ]}
        />
      </div>
      <SectionHeader
        title="Payment History"
        rightContent={
          <div className="cursor-pointer w-10 h-10 bg-white rounded-md flex items-center justify-center">
            <VCalendarIcon />
          </div>
        }
      />
      <div className="my-5 bg-white rounded-lg p-6 ">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Billing History</h2>
          <p className="text-sm text-gray-400 my-2">
            View all transaction history made through your Account
          </p>
        </div>
        <Tabs>
          <Tab label="All Transactions (10)">
            <Table
              tableHeader={
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Channel</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              }
              tableBody={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <TableRow key={index}>
                  <TableData>029830192</TableData>
                  <TableData>
                    <PaymentChannel channel="cheque" />
                  </TableData>
                  <TableData>₦951,764</TableData>
                  <TableData>07/3/2023 9:45:01 PM</TableData>
                  <TableData>
                    <StatusPill status="ACTIVE" />
                  </TableData>
                  <TableData>
                    <VDownloadIcon className="cursor-pointer" />
                  </TableData>
                </TableRow>
              ))}
            />
            <EmptyState
              icon={<VCardPosIcon />}
              title="There are no transactions yet."
              info="When you perform a transaction on your account, they will appear here"
            />
            <Pagination
              currentPage={1}
              itemsPerPage={10}
              onPageChange={(page) => console.log(page)}
              totalItems={100}
              totalPages={10}
            />
          </Tab>
          <Tab label="Approved (10)">
            <Table
              tableHeader={
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Channel</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              }
              tableBody={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <TableRow key={index}>
                  <TableData>029830192</TableData>
                  <TableData>
                    <PaymentChannel channel="visa" />
                  </TableData>
                  <TableData>₦951,764</TableData>
                  <TableData>07/3/2023 9:45:01 PM</TableData>
                  <TableData>
                    <StatusPill status="ACTIVE" />
                  </TableData>
                  <TableData>
                    <VDownloadIcon className="cursor-pointer" />
                  </TableData>
                </TableRow>
              ))}
            />
            <EmptyState
              icon={<VCardPosIcon />}
              title="There are no transactions yet."
              info="When you perform a transaction on your account, they will appear here"
            />
            <Pagination
              currentPage={1}
              itemsPerPage={10}
              onPageChange={(page) => console.log(page)}
              totalItems={100}
              totalPages={10}
            />
          </Tab>
          <Tab label="Pending (10)">
            <Table
              tableHeader={
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Channel</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              }
              tableBody={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <TableRow key={index}>
                  <TableData>029830192</TableData>
                  <TableData>
                    <PaymentChannel channel="mastercard" />
                  </TableData>
                  <TableData>₦951,764</TableData>
                  <TableData>07/3/2023 9:45:01 PM</TableData>
                  <TableData>
                    <StatusPill status="ACTIVE" />
                  </TableData>
                  <TableData>
                    <VDownloadIcon className="cursor-pointer" />
                  </TableData>
                </TableRow>
              ))}
            />
            <EmptyState
              icon={<VCardPosIcon />}
              title="There are no transactions yet."
              info="When you perform a transaction on your account, they will appear here"
            />
            <Pagination
              currentPage={1}
              itemsPerPage={10}
              onPageChange={(page) => console.log(page)}
              totalItems={100}
              totalPages={10}
            />
          </Tab>
          <Tab label="Failed (0)">
            <Table
              tableHeader={
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Channel</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              }
              tableBody={[].map((item, index) => (
                <TableRow key={index}>
                  <TableData>029830192</TableData>
                  <TableData>
                    <PaymentChannel channel="wire" />
                  </TableData>
                  <TableData>₦951,764</TableData>
                  <TableData>07/3/2023 9:45:01 PM</TableData>
                  <TableData>
                    <StatusPill status="ACTIVE" />
                  </TableData>
                  <TableData>
                    <VDownloadIcon className="cursor-pointer" />
                  </TableData>
                </TableRow>
              ))}
            />
            <EmptyState
              icon={<VCardPosIcon />}
              title="There are no transactions yet."
              info="When you perform a transaction on your account, they will appear here"
            />
            <Pagination
              currentPage={1}
              itemsPerPage={10}
              onPageChange={(page) => console.log(page)}
              totalItems={100}
              totalPages={10}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default PaymentHistoryPage;

PaymentHistoryPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
