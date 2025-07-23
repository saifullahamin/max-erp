import { LeaveType, LeaveBalance, LeaveRequest, Employee } from '../types/leave';

export const leaveTypes: LeaveType[] = [
  {
    id: '1',
    name: 'Annual Leave',
    description: 'Paid vacation days',
  },
  {
    id: '2',
    name: 'Sick Leave',
    description: 'Medical and health-related leave',
  },
  {
    id: '3',
    name: 'Personal Leave',
    description: 'Personal and family matters',
  },
  {
    id: '4',
    name: 'Maternity Leave',
    description: 'Maternity and parental leave',
  },
  {
    id: '5',
    name: 'Unpaid Leave',
    description: 'Leave without pay',
  },
];

export const leaveBalances: LeaveBalance[] = [
  {
    id: '1',
    leaveType: leaveTypes[0],
    totalDays: 25,
    usedDays: 8,
    remainingDays: 17
  },
  {
    id: '2',
    leaveType: leaveTypes[1],
    totalDays: 15,
    usedDays: 3,
    remainingDays: 12
  },
  {
    id: '3',
    leaveType: leaveTypes[2],
    totalDays: 10,
    usedDays: 2,
    remainingDays: 8
  },
  {
    id: '4',
    leaveType: leaveTypes[3],
    totalDays: 90,
    usedDays: 0,
    remainingDays: 90
  },
  {
    id: '5',
    leaveType: leaveTypes[4],
    totalDays: 30,
    usedDays: 1,
    remainingDays: 29
  }
];

export const currentEmployee: Employee = {
  id: 'emp001',
  name: 'John Doe',
  email: 'john.doe@maxerp.com',
  department: 'Engineering',
  position: 'Senior Software Engineer',
  avatar: 'JD'
};

export const leaveRequests: LeaveRequest[] = [
  {
    id: 'req001',
    employeeId: 'emp001',
    employeeName: 'John Doe',
    leaveType: leaveTypes[0],
    startDate: '2024-02-15',
    endDate: '2024-02-16',
    duration: 'full-day',
    notes: 'Family vacation',
    status: 'approved',
    submittedAt: '2024-01-20T10:30:00Z',
    approvedAt: '2024-01-21T14:15:00Z',
    approvedBy: 'Sarah Manager'
  },
  {
    id: 'req002',
    employeeId: 'emp001',
    employeeName: 'John Doe',
    leaveType: leaveTypes[1],
    startDate: '2024-01-25',
    endDate: '2024-01-25',
    duration: 'full-day',
    notes: 'Not feeling well',
    status: 'approved',
    submittedAt: '2024-01-24T08:00:00Z',
    approvedAt: '2024-01-24T09:30:00Z',
    approvedBy: 'Sarah Manager'
  },
  {
    id: 'req003',
    employeeId: 'emp001',
    employeeName: 'John Doe',
    leaveType: leaveTypes[2],
    startDate: '2024-03-10',
    endDate: '2024-03-10',
    duration: 'half-day',
    notes: 'Doctor appointment',
    status: 'pending',
    submittedAt: '2024-02-28T16:45:00Z'
  },
  {
    id: 'req004',
    employeeId: 'emp001',
    employeeName: 'John Doe',
    leaveType: leaveTypes[0],
    startDate: '2024-04-01',
    endDate: '2024-04-05',
    duration: 'full-day',
    notes: 'Spring break with family',
    status: 'pending',
    submittedAt: '2024-02-15T11:20:00Z'
  }
]; 