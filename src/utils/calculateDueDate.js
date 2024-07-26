import dayjs from "dayjs";

const calulateDueDate = (dueDate) => {
  // 현재 일자와 due date의 차이를 날짜 기준으로 계산
  const now = dayjs();
  const due = dayjs(dueDate);
  return due.diff(now, "day");
};

export default calulateDueDate;
