import React from "react";
import Layout from "../../components/layouts/Layout";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { HomeIcon, VCalendarIcon } from "../../components/icons";
import { SectionHeader } from "../../components/sectionHeader";
import Link from "next/link";
import { EmptyState } from "../../components/emptyState";
import Pagination from "../../components/pagination";
import StatusPill from "../../components/Pills/StatusPill";
import { Tab, Tabs } from "../../components/tab";
import Table, { TableData, TableHead, TableRow } from "../../components/table";
import { Button } from "../../components/forms";

const InvoiceManagement = () => {
  return (
    <div>
      <div className="my-7">
        <Breadcrumbs
          items={[
            { title: "Home", icon: <HomeIcon />, to: "/dashboard" },
            { title: "Invoice Manager", to: "/invoice-management" },
          ]}
        />
      </div>
      <SectionHeader
        title="Invoice Manager"
        rightContent={
          <div className="cursor-pointer w-10 h-10 bg-white rounded-md flex items-center justify-center">
            <VCalendarIcon />
          </div>
        }
      />
      <div className="my-5 bg-white rounded-lg p-6">
        <div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold">AT A GLANCE</h2>
            <p className="text-sm text-gray-400">
              An intuitive way to see all your general invoices for a quick
              access
            </p>
          </div>
          <div className="w-full flex gap-4 justify-between">
            <div className="w-[48%] rounded-md border border-gray-300 border-dashed py-6 px-5 flex items-center  justify-between gap-3">
              <div className="w-[60%] p-3">
                <h3 className="text-sm font-semibold uppercase">
                  Total Income
                </h3>
                <div className="flex items-center gap-4 my-2">
                  <h1 className="text-2xl font-black">
                    ₦8,332,134.
                    <span className="text-gray-400 text-lg font-normal">
                      99
                    </span>
                  </h1>
                  <h3 className="text-green-500 text-lg font-bold">↑2.5%</h3>
                </div>
                <div className="flex items-center justify-center px-3 py-1 w-fit rounded-full text-center bg-green-200">
                  <p className="text-xs text-green-500">
                    + 32% compared to last week
                  </p>
                </div>
              </div>
              <div className="w-[30%] flex flex-col gap-2">
                <div className="bg-gray-200 rounded-lg py-2 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-gray-500" />
                    <p className="text-gray-500 text-sm uppercase font-semibold">
                      Last week
                    </p>
                  </div>
                  <p className="text-sm font-bold">
                    ₦1,771,020.
                    <span className="text-gray-400 text-xs font-normal">
                      99
                    </span>
                  </p>
                </div>
                <div className="bg-gray-200 rounded-lg py-2 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                    <p className="text-blue-500 text-sm uppercase font-semibold">
                      Last week
                    </p>
                  </div>
                  <p className="text-sm font-bold">
                    ₦1,771,020.
                    <span className="text-gray-400 text-xs font-normal">
                      99
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] rounded-md flex gap-4">
              <div className="w-[50%] border border-gray-300 border-dashed p-2 flex items-center rounded-md">
                <div className="w-full px-2">
                  <h3 className="text-sm font-semibold uppercase">Pending</h3>
                  <div className="flex items-center gap-4 my-2">
                    <h1 className="text-2xl font-black">
                      ₦8,332,134.
                      <span className="text-gray-400 text-lg font-normal">
                        99
                      </span>
                    </h1>
                    <h3 className="text-yellow-500 text-lg font-bold">↑2.5%</h3>
                  </div>
                  <div className="flex items-center justify-center px-3 py-1 w-fit rounded-full text-center bg-yellow-200">
                    <p className="text-xs text-yellow-500">
                      + 32% compared to last week
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%] border border-gray-300 border-dashed p-2 flex items-center rounded-md">
                <div className="w-full px-2">
                  <h3 className="text-sm font-semibold uppercase">Failed</h3>
                  <div className="flex items-center gap-4 my-2">
                    <h1 className="text-2xl font-black">
                      ₦8,332,134.
                      <span className="text-gray-400 text-lg font-normal">
                        99
                      </span>
                    </h1>
                    <h3 className="text-red-500 text-lg font-bold">↑2.5%</h3>
                  </div>
                  <div className="flex items-center justify-center px-3 py-1 w-fit rounded-full text-center bg-red-200">
                    <p className="text-xs text-red-500">
                      + 32% compared to last week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 bg-white rounded-lg p-6 ">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Invoices and Receipt</h2>
          <p className="text-sm text-gray-400 my-2">
            View all your invoices and receipts to keep track of your expenses
            and incomes in an intuitive interface
          </p>
        </div>
        <Tabs>
          <Tab label="All Invoices (10)">
            <Table
              tableHeader={
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Total Items</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Invoice Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              }
              tableBody={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <TableRow key={index}>
                  <TableData>029830192</TableData>
                  <TableData>17</TableData>
                  <TableData>₦951,764</TableData>
                  <TableData>Invoice</TableData>
                  <TableData>
                    <StatusPill status="ACTIVE" />
                  </TableData>
                  <TableData>07/3/2023 9:45:01 PM</TableData>
                  <TableData>
                    <div className="flex items-center gap-3">
                      <Button className="rounded-lg py-2">DOWNLOAD</Button>
                    </div>
                  </TableData>
                </TableRow>
              ))}
            />
            <EmptyState
              title="There are no invoices yet."
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
          <Tab label="Pending Invoices (2)">
            <Table
              tableHeader={
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Total Items</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Invoice Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              }
              tableBody={[1, 2].map((item, index) => (
                <TableRow key={index}>
                  <TableData>029830192</TableData>
                  <TableData>17</TableData>
                  <TableData>₦951,764</TableData>
                  <TableData>Invoice</TableData>
                  <TableData>
                    <StatusPill status="ACTIVE" />
                  </TableData>
                  <TableData>07/3/2023 9:45:01 PM</TableData>
                  <TableData>
                    <div className="flex items-center gap-3">
                      <Button className="rounded-lg py-2">DOWNLOAD</Button>
                    </div>
                  </TableData>
                </TableRow>
              ))}
            />
            <EmptyState
              title="There are no invoices yet."
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
          <Tab label="Due Invoices (4)">
            <Table
              tableHeader={
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Total Items</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Invoice Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              }
              tableBody={[1, 2, 3, 4].map((item, index) => (
                <TableRow key={index}>
                  <TableData>029830192</TableData>
                  <TableData>17</TableData>
                  <TableData>₦951,764</TableData>
                  <TableData>Invoice</TableData>
                  <TableData>
                    <StatusPill status="ACTIVE" />
                  </TableData>
                  <TableData>07/3/2023 9:45:01 PM</TableData>
                  <TableData>
                    <div className="flex items-center gap-3">
                      <Button className="rounded-lg py-2">DOWNLOAD</Button>
                    </div>
                  </TableData>
                </TableRow>
              ))}
            />
            <EmptyState
              title="There are no invoices yet."
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

export default InvoiceManagement;

InvoiceManagement.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
