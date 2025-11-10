import dayjs from 'dayjs';
export function getMsgTime() {
    const timeInMiliSec = dayjs().valueOf();
    const timeIn24HrFrmt = dayjs(timeInMiliSec).format('HH:mm');
    return timeIn24HrFrmt;
}