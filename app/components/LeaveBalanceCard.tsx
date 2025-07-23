"use client";

import React from "react";
import { Col } from "antd";
import { LeaveBalance } from "../types/leave";

interface LeaveBalanceCardProps {
  balance: LeaveBalance;
  index: number;
}

const LeaveBalanceCard: React.FC<LeaveBalanceCardProps> = ({
  balance,
  index,
}) => {
  const colors = [
    { from: "#10B981", to: "#34D399" },
    { from: "#F59E0B", to: "#FBBF24" },
    { from: "#EF4444", to: "#F87171" },
    { from: "#3B82F6", to: "#60A5FA" },
    { from: "#8B5CF6", to: "#A78BFA" },
  ];

  const color = colors[index % colors.length];
  const percentage = Math.round((balance.usedDays / balance.totalDays) * 100);

  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <div
        style={{
          background: `linear-gradient(135deg, ${color.from} 0%, ${color.to} 100%)`,
          borderRadius: "16px",
          padding: "16px",
          color: "white",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          minHeight: "140px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "12px",
              opacity: 0.9,
              marginBottom: "6px",
              fontWeight: 500,
            }}
          >
            {balance.leaveType.name}
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            {balance.usedDays}/{balance.totalDays}
          </div>
          <div
            style={{
              fontSize: "10px",
              opacity: 0.8,
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "white",
                }}
              />
            </div>
            {percentage}% Taken
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: `conic-gradient(white ${
                percentage * 3.6
              }deg, rgba(255, 255, 255, 0.2) ${percentage * 3.6}deg)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "bold",
                color: color.from,
              }}
            >
              {percentage}%
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default LeaveBalanceCard;
