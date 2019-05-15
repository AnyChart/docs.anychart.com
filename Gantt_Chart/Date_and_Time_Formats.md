{:index 7}
# Date and Time Formats

## Input

ВХОДНЫЕ ДАННЫЕ

у нас есть входные данные, то есть до как даты задаются в данных, и вы можете использовать

1) unix timestamp прямо числом - 1518663600000
2) Date.UTC функцию javasctipt - Date.UTC(2018,0,15,3) - что по сути то же что так как она возвразает unix timestamp 
3) объект типа Date  - new Date('2018-02-15T03:24:00')
4) строку с датой  "2018-01-15" или датой/временем "2018-01-15 00:00:00.000" 
при преобразованиии строки в дату используется 
new Date(dateString);
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

http://playground.anychart.stg/VEb00OQx

5) inputDateTimeFormat и inputLocale (которая по умолчанию en-us)

то какая строка с датой воспринимается зависит от входной локали (inputLocale)
и входного формата даты/времени (inputDateTimeFormat)

https://docs.anychart.com/Common_Settings/Localization
https://api.anychart.com/v8/anychart.format#inputLocale
https://api.anychart.com/v8/anychart.format#inputDateTimeFormat

вот например https://playground.anychart.com/api/format/_samples/anychart.format.inputDateTimeFormat
с en-us умолчанием

а теперь подключаем ja-jp локаль из https://cdn.anychart.com/releases/v8/locales/ja-jp.js
и хотя формат все также 'yyyy MMM d' во входных данных написано '2016 2月 4'
https://playground.anychart.com/JfjNwZsx

## Format

ФОРМАТИРОАНИЕ ПРОИСХОДИТ ИСПОЛЬЗУЮЯ 

http://userguide.icu-project.org/formatparse/datetime

/**
 * Datetime formatting functions following the pattern specification as defined
 * in JDK, ICU and CLDR, with minor modification for typical usage in JS.
 * Pattern specification:
 * {@link http://userguide.icu-project.org/formatparse/datetime}
 * <pre>
 * Symbol   Meaning                    Presentation       Example
 * ------   -------                    ------------       -------
 * G        era designator             (Text)             AD
 * y        year                       (Number)           1996
 * Q        quarter                    (Text)             Q3 & 3rd quarter
 * M        month in year              (Text & Number)    July & 07
 * L        month in year (standalone) (Text & Number)    July & 07
 * d        day in month               (Number)           10
 * h        hour in am/pm (1~12)       (Number)           12
 * H        hour in day (0~23)         (Number)           0
 * m        minute in hour             (Number)           30
 * s        second in minute           (Number)           55
 * S        fractional second          (Number)           978
 * E        day of week                (Text)             Tue & Tuesday
 * c        day of week (standalone)   (Text & Number)    2 & Tues & Tuesday & T
 * w        week in year               (Number)           27
 * a        am/pm marker               (Text)             PM
 * k        hour in day (1~24)         (Number)           24
 * K        hour in am/pm (0~11)       (Number)           0
 * z        time zone                  (Text)             Pacific Standard Time
 * Z        time zone (RFC 822)        (Number)           -0800
 * v        time zone (generic)        (Text)             America/Los_Angeles
 * V        time zone                  (Text)             Los Angeles Time
 * '        escape for text            (Delimiter)        'Date='
 * ''       single quote               (Literal)          'o''clock'
 *
 * The count of pattern letters determine the format.
 * (Text): 4 or more, use full form, <4, use short or abbreviated form if it
 * exists. (e.g., "EEEE" produces "Monday", "EEE" produces "Mon")
 *
 * (Number): the minimum number of digits. Shorter numbers are zero-padded to
 * this amount (e.g. if "m" produces "6", "mm" produces "06"). Year is handled
 * specially; that is, if the count of 'y' is 2, the Year will be truncated to
 * 2 digits. (e.g., if "yyyy" produces "1997", "yy" produces "97".) Unlike other
 * fields, fractional seconds are padded on the right with zero.
 *
 * :(Text & Number) 3 or over, use text, otherwise use number. (e.g., "M"
 * produces "1", "MM" produces "01", "MMM" produces "Jan", and "MMMM" produces
 * "January".)
 *
 * Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 * ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 * '.', ' ', '#' and '@' will appear in the resulting time text even they are
 * not embraced within single quotes.
 * </pre>
 */

## Display

ПОКАЗЫВАНИЕ ДАТ

то как все выглядит зависит от

1) outputLocale - по умолчанию en-us
2)
outputDateFormat 
outputDateTimeFormat
outputTimeFormat

по умолчанию это 

dateFormat: 'y/MM/dd',
timeFormat: 'H:mm:ss',
dateTimeFormat: 'y/MM/dd H:mm:ss', поля из dateTimeLocale поля в локали

3) настроек тултипов, лейблов, колонок, хедереов timeline - у них всех есть форматтеры в которых можно писать 

 "{%actualstart}{dateTimeFormat:yyyy MMM d}" в токенах
и 
 anychart.format.dateTime(this.actualStart);
и
anychart.format.dateTime(this.actualEnd, "E");

в функциях

https://playground.anychart.com/lxGU2Oem
