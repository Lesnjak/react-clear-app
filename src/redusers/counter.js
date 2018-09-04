
import cvData from '../cv-data.json';
import {INCREMENT} from '../constants'

export default (count = cvData.skills.list, action) => {
    const {type, payload} = action;

    switch (type) {
        case INCREMENT: return count.filter((coun) => coun.name !== payload)



    }

    return count
}