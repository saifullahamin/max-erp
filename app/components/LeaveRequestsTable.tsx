"use client";

import React from "react";
import { Table, Tag, Typography } from "antd";
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { LeaveRequest, LeaveType } from "../types/leave";
import { DesignSystemTheme } from "../types/theme";
import { format, parseISO } from "date-fns";

const { Text, Paragraph } = Typography;

interface LeaveRequestsTableProps {
  requests: LeaveRequest[];
  theme: DesignSystemTheme;
}

const LeaveRequestsTable: React.FC<LeaveRequestsTableProps> = ({
  requests,
  theme,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "success";
      case "rejected":
        return "error";
      case "pending":
        return "processing";
      default:
        return "default";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircleOutlined />;
      case "rejected":
        return <CloseCircleOutlined />;
      case "pending":
        return <ClockCircleOutlined />;
      default:
        return <ExclamationCircleOutlined />;
    }
  };

  const columns = [
    {
      title: "Leave Type",
      dataIndex: "leaveType",
      key: "leaveType",
      render: (leaveType: LeaveType) => (
        <Text style={{ fontSize: "14px" }}>{leaveType.name}</Text>
      ),
    },
    {
      title: "Date Range",
      key: "dateRange",
      render: (record: LeaveRequest) => (
        <div style={{ fontSize: "14px" }}>
          <div>{format(parseISO(record.startDate), "MMM dd, yyyy")}</div>
          {record.startDate !== record.endDate && (
            <div
              style={{ fontSize: "12px", color: theme.colors.text.secondary }}
            >
              to {format(parseISO(record.endDate), "MMM dd, yyyy")}
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: (duration: string) => (
        <Text style={{ fontSize: "14px" }}>
          {duration === "full-day" ? "Full Day" : "Half Day"}
        </Text>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          color={getStatusColor(status)}
          icon={getStatusIcon(status)}
          style={{
            borderRadius: "8px",
            padding: "4px 12px",
            fontSize: "12px",
            fontWeight: 500,
            border: "none",
          }}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Tag>
      ),
    },
    {
      title: "Submitted",
      dataIndex: "submittedAt",
      key: "submittedAt",
      render: (date: string) => (
        <Text style={{ fontSize: "14px" }} type="secondary">
          {format(parseISO(date), "MMM dd, yyyy")}
        </Text>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={requests}
      rowKey="id"
      pagination={{
        pageSize: 10,
        showSizeChanger: false,
        showQuickJumper: false,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} requests`,
        size: "small",
      }}
      className="custom-table"
      scroll={{ x: 600 }}
      expandable={{
        expandedRowRender: (record) => (
          <div style={{ padding: theme.spacing.md }}>
            <Paragraph style={{ fontSize: "14px" }}>
              <Text style={{ fontSize: "14px" }} strong>
                Notes:{" "}
              </Text>
              {record.notes || "No notes provided"}
            </Paragraph>
            {record.approvedBy && (
              <Paragraph style={{ fontSize: "14px" }}>
                <Text style={{ fontSize: "14px" }} strong>
                  Approved by:{" "}
                </Text>
                {record.approvedBy} on{" "}
                {format(parseISO(record.approvedAt!), "MMM dd, yyyy")}
              </Paragraph>
            )}
          </div>
        ),
      }}
    />
  );
};

export default LeaveRequestsTable;
