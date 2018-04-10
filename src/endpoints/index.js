import fs from 'fs';
import path from 'path';
import Domain from '../domain';

const { GroupBuy } = Domain;
const { Calendar } = Domain;

export function getCalendar(req, res) {
  return Calendar.get()
    .then(calendar => {
      console.log(calendar)
      return res.end(calendar, 'binary');
      // return res.send(calendar)
    })
    .catch(err => res.send({ error: 'could not get calendar' }))
}

export function getGroupbuys(req, res) {
  return GroupBuy.all(req.query.first, req.query.limit, req.query.after)
    .then(page => res.send(JSON.stringify(page)))
}