"use client";

import React, { useState } from "react";
import {
  Layout,
  Card,
  Row,
  Typography,
  Button,
  Space,
  Avatar,
  App,
} from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { useDesignSystem } from "./theme/ThemeProvider";
import {
  leaveBalances,
  leaveRequests,
  currentEmployee,
  leaveTypes,
} from "./data/mockData";
import { LeaveRequest, LeaveRequestFormValues } from "./types/leave";
import { format } from "date-fns";
import LeaveBalanceCard from "./components/LeaveBalanceCard";
import LeaveRequestForm from "./components/LeaveRequestForm";
import LeaveRequestsTable from "./components/LeaveRequestsTable";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export default function LeaveRequestPage() {
  const theme = useDesignSystem();
  const { notification } = App.useApp();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState<LeaveRequest[]>(leaveRequests);

  const handleSubmit = async (values: LeaveRequestFormValues) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newRequest: LeaveRequest = {
        id: `req-${Date.now()}`,
        employeeId: currentEmployee.id,
        employeeName: currentEmployee.name,
        leaveType: leaveTypes.find((lt) => lt.id === values.leaveTypeId)!,
        startDate: format(values.dateRange[0].toDate(), "yyyy-MM-dd"),
        endDate: format(values.dateRange[1].toDate(), "yyyy-MM-dd"),
        duration: values.duration,
        notes: values.notes || "",
        status: "pending",
        submittedAt: new Date().toISOString(),
        approvedBy: undefined,
        approvedAt: undefined,
      };

      setRequests([newRequest, ...requests]);
      setIsModalVisible(false);

      notification.success({
        message: "Leave Request Submitted",
        description:
          "Your leave request has been submitted successfully and is pending approval.",
        placement: "topRight",
        duration: 4,
        style: {
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to submit leave request. Please try again.",
        placement: "topRight",
        duration: 4,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: theme.colors.background.secondary,
      }}
    >
      <Header
        style={{
          background: theme.colors.background.primary,
          borderBottom: `1px solid ${theme.colors.border.light}`,
          padding: `0 ${theme.spacing.md}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "auto",
          minHeight: 64,
          flexWrap: "wrap",
          gap: theme.spacing.sm,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: theme.spacing.md,
            flexWrap: "wrap",
          }}
        >
          <Title
            level={3}
            style={{
              margin: 0,
              color: theme.colors.primary[500],
              fontSize: "18px",
            }}
          >
            Max ERP - HRMS
          </Title>
          <Text
            type="secondary"
            className="hide-on-mobile"
            style={{
              fontSize: "12px",
            }}
          >
            Leave Management System
          </Text>
        </div>
        <Space size="small">
          <Avatar size="default" icon={<UserOutlined />} />
          <div style={{ height: "fit-content" }}>
            <div
              style={{
                fontWeight: 500,
                lineHeight: "1.2",
                fontSize: "14px",
              }}
            >
              {currentEmployee.name}
            </div>
            <div
              className="hide-on-mobile"
              style={{
                lineHeight: "1.2",
                fontSize: "11px",
                color: theme.colors.text.secondary,
              }}
            >
              {currentEmployee.position}
            </div>
          </div>
        </Space>
      </Header>

      <Content style={{ padding: theme.spacing.md }}>
        <div
          style={{
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            margin: "0 auto",
            maxWidth: "1200px",
          }}
        >
          <Card
            title="Leave Balance"
            style={{ marginBottom: theme.spacing.lg }}
          >
            <Row
              gutter={[parseInt(theme.spacing.lg), parseInt(theme.spacing.lg)]}
            >
              {leaveBalances.map((balance, index) => (
                <LeaveBalanceCard
                  key={balance.id}
                  balance={balance}
                  index={index}
                />
              ))}
            </Row>
          </Card>

          <Card
            title="Leave Requests"
            extra={
              <Button
                type="primary"
                size="middle"
                style={{
                  borderRadius: "8px",
                  padding: "4px 8px",
                  fontSize: "12px",
                  fontWeight: 500,
                  border: "none",
                }}
                icon={<PlusOutlined />}
                onClick={() => setIsModalVisible(true)}
              >
                <span className="hide-on-mobile">New Request</span>
                <span className="show-on-mobile">New</span>
              </Button>
            }
          >
            <LeaveRequestsTable requests={requests} theme={theme} />
          </Card>
        </div>

        <LeaveRequestForm
          isVisible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onSubmit={handleSubmit}
          loading={loading}
          leaveTypes={leaveTypes}
        />
      </Content>
    </Layout>
  );
}
