"use client";

import React from "react";
import { Modal, Form, DatePicker, Select, Input, Button, Space } from "antd";
import { LeaveType, LeaveRequestFormValues } from "../types/leave";
import { isBefore, startOfDay } from "date-fns";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

interface LeaveRequestFormProps {
  isVisible: boolean;
  onCancel: () => void;
  onSubmit: (values: LeaveRequestFormValues) => void;
  loading: boolean;
  leaveTypes: LeaveType[];
}

const LeaveRequestForm: React.FC<LeaveRequestFormProps> = ({
  isVisible,
  onCancel,
  onSubmit,
  loading,
  leaveTypes,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: LeaveRequestFormValues) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Modal
      title="Submit Leave Request"
      open={isVisible}
      onCancel={onCancel}
      footer={null}
      width="90%"
      style={{ maxWidth: "600px" }}
      destroyOnClose
    >
      <Form
        form={form}
        style={{
          paddingTop: "16px",
        }}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          duration: "full-day",
        }}
        validateMessages={{
          required: "${label} is required",
        }}
        className="custom-form"
      >
        <Form.Item
          name="leaveTypeId"
          label="Leave Type"
          rules={[{ required: true, message: "Please select a leave type" }]}
        >
          <Select placeholder="Select leave type">
            {leaveTypes.map((type) => (
              <Select.Option key={type.id} value={type.id}>
                {type.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="dateRange"
          label="Date Range"
          rules={[{ required: true, message: "Please select date range" }]}
        >
          <RangePicker
            style={{ width: "100%" }}
            format="YYYY-MM-DD"
            disabledDate={(current) => {
              return (
                current && isBefore(current.toDate(), startOfDay(new Date()))
              );
            }}
          />
        </Form.Item>

        <Form.Item
          name="duration"
          label="Duration"
          rules={[{ required: true, message: "Please select duration" }]}
        >
          <Select>
            <Select.Option value="full-day">Full Day</Select.Option>
            <Select.Option value="half-day">Half Day</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="notes" label="Notes (Optional)">
          <TextArea
            rows={4}
            placeholder="Please provide any additional information about your leave request..."
            maxLength={500}
            showCount
          />
        </Form.Item>

        <Form.Item
          style={{
            marginBottom: 0,
            textAlign: "right",
            paddingTop: "16px",
          }}
        >
          <Space>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit Request
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LeaveRequestForm;
