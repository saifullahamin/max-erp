export interface LeaveBalance {
  id: string;
  leaveType: LeaveType;
  totalDays: number;
  usedDays: number;
  remainingDays: number;
}

export interface LeaveType {
  id: string;
  name: string;
  description: string;
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  leaveType: LeaveType;
  startDate: string;
  endDate: string;
  duration: 'half-day' | 'full-day';
  notes?: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  approvedAt?: string;
  approvedBy?: string;
}

export interface LeaveRequestForm {
  leaveTypeId: string;
  startDate: string;
  endDate: string;
  duration: 'half-day' | 'full-day';
  notes?: string;
}

export type DateRangeValue = [any, any];

export interface LeaveRequestFormValues {
  leaveTypeId: string;
  dateRange: DateRangeValue;
  duration: 'half-day' | 'full-day';
  notes?: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  avatar?: string;
} 