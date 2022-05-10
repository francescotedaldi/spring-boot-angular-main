// tslint:disable:no-magic-numbers
import {ANY} from '../utils/any';

export class Validator {
  public properties: string[]; // expected properties from JSON response
  public propertiesAuto: string[]; // primitive properties to auto-inject
  public name: string; // object name

  constructor(name: string, properties: string[], propertiesAuto: string[]) {
    this.properties = properties;
    this.propertiesAuto = propertiesAuto;
    this.name = name;
  }
}

export abstract class ActiveModel {

  constructor(objectJSON: ANY, validator: Validator) {
    if (objectJSON) {
      const responseKeys = Object.keys(objectJSON);

      for (const key of responseKeys) {
        // Check if server send extra info
        if (validator.properties.includes(key)) {
          if (validator.propertiesAuto.includes(key)) {
            this[key] = objectJSON[key];
          }
        } else {
          console.warn(`Extra data in response: '${key}' not recognized for model '${validator.name}'`);
        }
      }

      // Check if server send less info
      for (const key of validator.properties) {
        if (!responseKeys.includes(key)) {
          console.warn(`Missing data in response: '${key}' expected for model '${validator.name}'`);
        }
      }
    }
  }

  public static getDateWithoutHours(date: Date, timezone: boolean): Date {
    if (!date) {
      return null;
    }
    const newDate = date;
    newDate.setHours(0, 0, 0, 0);
    if (timezone) {
      newDate.setHours(newDate.getHours() - newDate.getTimezoneOffset() / 60);
    }

    return newDate;
  }

  public static getDate(date: Date, timezone: boolean): Date {
    if (!date) {
      return null;
    }
    const newDate = date;
    if (timezone) {
      newDate.setHours(newDate.getHours() - newDate.getTimezoneOffset() / 60);
    }

    return newDate;
  }

  public static getDateWithoutHoursEndDay(date: Date, timezone: boolean): Date {
    if (!date) {
      return null;
    }
    const newDate = date;
    newDate.setHours(23, 59, 59, 0);
    if (timezone) {
      newDate.setHours(newDate.getHours() - newDate.getTimezoneOffset() / 60);
    }

    return newDate;
  }

  public static getDateAsStringInMilliseconds(date: Date): string {
    if (!date) {
      return null;
    }
    const newDate = ActiveModel.getDate(date, false);
    return newDate.getTime().toString();
  }

  public static getDateWithoutHoursAsStringInMilliseconds(date: Date): string {
    if (!date) {
      return null;
    }
    const newDate = ActiveModel.getDateWithoutHours(date, false);
    return newDate.getTime().toString();
  }

  public static getDateWithoutHoursEndDayAsStringInMilliseconds(date: Date): string {
    if (!date) {
      return null;
    }
    const newDate = ActiveModel.getDateWithoutHoursEndDay(date, false);
    return newDate.getTime().toString();
  }
}
