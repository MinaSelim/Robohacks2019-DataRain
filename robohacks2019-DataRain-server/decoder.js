var pl_str = [
    "zero",
    "tmp",
    "hum",
    "acc3",
    "inc",
    "acc2",
    "light",
    "bat",
    "snd",
    "gps",
    "co",
    "ext_analog",
    "ext_digital",
    "pressure",
    "ext_tmp",
    "disp",
    "pir",
    "shum",
    "ext_pir",
    "ext_cntr",
    "ext_sw",
    "gas_nh3",
    "gas_ash3",
    "gas_c6h6",
    "gas_cl2",
    "gas_h2",
    "gas_h2s",
    "gas_hcl",
    "gas_hcn",
    "gas_hf",
    "gas_no2",
    "gas_o3",
    "gas_ph3",
    "gas_so2",
    "gas_ch4",
    "gas_c2h2",
    "gas_gasoline",
    "gas_c2h4o3",
    "us_distance",
    "gas_co2",
    "gas_co2",
    "ext_current",
    "psi",
    "pm",
    "pos8",
    "pos16",
    "avg_current",
    "uv",
    "wind_dir",
    "wind_speed",
    "rainfall",
    "vibration",
    "m_hz",
    "m_v",
    "m_d",
    "ext_cntr_12",
    "ext_leakage",
    "gas_ch2o",
    "ext_current",
    "gas_voc",
    "ph_value",
    "O2_concentration"
  ];
  
  /* Definies the PayLoad format */
  const PLSS_PL_NONE                    = 0; /* none paylaod, should be ignored */
  const PLSS_PL_TEMPERATURE             = 1; /* int16 in unit of 0.1degree */
  const PLSS_PL_HUMIDITY                = 2; /* uint8 in unit of 1% */
  const PLSS_PL_ACCELERATION            = 3; /* int16[3] x,y,z in unit of 1mg */
  const PLSS_PL_INCLINE                 = 4; /* int16[3] x,y,r in unit of 0.01degree */
  const PLSS_PL_ACCELERATION_2D         = 5; /* int16[2] x,y in unit of 0.1mg */
  const PLSS_PL_LIGHT                   = 6; /* uint16 in unit of lumen */
  const PLSS_PL_BATTERY                 = 7; /* uint16 in unit of mv */
  const PLSS_PL_SOUND                   = 8; /* uint16 in unit of 0.1db */
  const PLSS_PL_GPS                     = 9; /* uint24[2] lati, long uint16 alti */
  const PLSS_PL_CO                      = 10; /* uint16 in unit of 1ppm*/
  const PLSS_PL_EXT_ANALOG              = 11; /* uint16 in unit of mv */
  const PLSS_PL_EXT_DIGITAL             = 12; /* uint8  */
  const PLSS_PL_PRESSURE                = 13; /* int32 in unit of pa */
  const PLSS_PL_EXT_TEMPERATURE         = 14; /* int16 in unit of 0.1degree */
  const PLSS_PL_DISP                    = 15; /* int16 in unit of 0.01mm displacement */
  const PLSS_PL_PIR                     = 16; /* uint8: 0 -none, 1 -detected */
  const PLSS_PL_SOIL_HUMIDITY           = 17; /* uint8: in unit of 1% */
  const PLSS_PL_EXT_PIR                 = 18; /* uint8: 0 -none, 1 -detected */
  const PLSS_PL_EXT_CNTR                = 19; /* uint32: external counter */
  const PLSS_PL_EXT_SWITCH              = 20; /* uint8: Bit7-1 for open, 0 for normal, Bit0~6 for open cntr */
  const PLSS_PL_EXT_NH3                 = 21; /* from NH3 to C2H4O3: uint16 in unit of 1ppm  */
  const PLSS_PL_EXT_ASH3                = 22;
  const PLSS_PL_EXT_C6H6                = 23;
  const PLSS_PL_EXT_CL2                 = 24;
  const PLSS_PL_EXT_H2                  = 25;
  const PLSS_PL_EXT_H2S                 = 26;
  const PLSS_PL_EXT_HCL                 = 27;
  const PLSS_PL_EXT_HCN                 = 28;
  const PLSS_PL_EXT_HF                  = 29;
  const PLSS_PL_EXT_NO2                 = 30;
  const PLSS_PL_EXT_O3                  = 31;
  const PLSS_PL_EXT_PH3                 = 32;
  const PLSS_PL_EXT_SO2                 = 33;
  const PLSS_PL_EXT_CH4                 = 34;
  const PLSS_PL_EXT_C2H2                = 35;
  const PLSS_PL_EXT_GASOLINE            = 36;
  const PLSS_PL_EXT_C2H4O3              = 37; /* from NH3 to C2H4O3: uint16 in unit of 1ppm  */
  const PLSS_PL_US_DISTANCE             = 38; /* uint16 of mm, ultrasonic distance */
  const PLSS_PL_EXT_CO2                 = 39; /* uint16 of 0.1% */
  const PLSS_PL_EXT_CO2_PPM             = 40; /* uint16 of ppm */
  const PLSS_PL_EXT_CURRENT             = 41; /* uint16 of 10ma */
  const PLSS_PL_EXT_PSI                 = 42; /* uint16 of PSI, for Water Pressure */
  const PLSS_PL_EXT_PM                  = 43; /* uint16[3] in unit of ug/m3 for pm1.0/2.5/10 */
  const PLSS_PL_POS_BMP8                = 44; /* uint8 of multiple sensor position bitmap */
  const PLSS_PL_POS_BMP16               = 45; /* uint16 of multiple sensor position bitmap */
  const PLSS_PL_EXT_CURRENT_AVG         = 46; /* uint16[3] of 10ma, for avg/max/min */
  const PLSS_PL_UV_INDEX                = 47; /* uint8 of uv index 0~11 */
  const PLSS_PL_WIND_DIR                = 48; /* uint8 of wind dir 0: north, 1:nen, 2:ne, 3:nee, 4:east, ...., 12: west, 13: nww, 14: nw, 15: nwn */
  const PLSS_PL_WIND_SPEED              = 49; /* uint16 of mm/s for wind speed */
  const PLSS_PL_RAINFALL                = 50; /* uint16: of 0.1mm for rainfall  */
  const PLSS_PL_VIBRATION               = 51; /* uint8: of vibration detection (b[0]: vib. flag, b[1~2]:0 for 2 1 for 3 axis, b[3]: change flag */
  const PLSS_PL_MOTION_HZ               = 52; /* uint16[3]: of Hz x/y/z */
  const PLSS_PL_MOTION_V                = 53; /* int16[3]: of 0.1mm/s Velocity x/y/z*/
  const PLSS_PL_MOTION_D                = 54; /* int16[3]: of 0.1mm Displacement x/y/z */
  const PLSS_PL_EXT_CNTR_12             = 55; /* uint16[2]: 1->2, 2->1 interrupts counter */
  const PLSS_PL_EXT_LEAKAGE             = 56; /* uint8: Bit7-1 for leakage, 0 for normal, Bit0~6 for leakage cntr */
  const PLSS_PL_EXT_CH2O                = 57; /* uint16 in unit of 1ppm  gas-ch2o*/
  const PLSS_PL_EXT_CURRENT_UA          = 58; /* uint16 of 100ua */
  
  const PLSS_PL_EXT_GAS_VOC             = 59; /* uint16 of 1 ppb VOC concentration in ppb (part per billion) */
  const PLSS_PL_EXT_PH_VALUE            = 60; /* uint8 of 0.1 PH value, a reported value 10 means the PH value is 1 */
  const PLSS_PL_EXT_O2_CONCENTRATION    = 61; /* uint16 of 0.1% O2 concentration in % */
  
  
  
  const PLSS_PL_INDICATOR               = 0xd7; /* PLSS Payload Indicator */
  const PLSS_PL_IND_V0                  = 0x7e; /* V0 normal sending data format */
  const PLSS_PL_IND_V1                  = 0x7f; /* V1 block sending data format for 3d accelero */
  const PLSS_PL_IND_PPB                 = 0x80; /* PPB data block */
  const PLSS_PL_IND_V3                  = 0x81; /* V3 block sending data format for 2d accelero */
  const PLSS_PL_IND_V4                  = 0x82; /* V4 block sending data format for common datas */
  const PLSS_PL_IND_PRB                 = 0x83; /* PRB data block */
  const PLSS_PL_IND_INFO                = 0x84; /* INFO data block */
  const PLSS_PL_IND_CLOCK               = 0x85; /* Clock data block */
  const PLSS_PL_IND_TXT                 = 0x86; /* TXT information from UART or 485 */
  const PLSS_PL_IND_INFO_EXT            = 0x87; /* Extended INFO data block */
  const PLSS_PL_IND_DATA                = 0x88; /* PPB or other data block: Byte#0 - Offset/Type, Byte#1 - Length, Byte#2..#N (size=Length) - Payload */
  const PLSS_PL_IND_VIDEO               = 0x89; /* Video stream */
  const PLSS_PL_IND_INFO_CAP            = 0x8a; /* Driver capability list */
  
  const GPS_STR_FLAG_LONGITUDE          = 0x01;
  const GPS_STR_FLAG_LETTER             = 0x02;
  
  const PLSS_MOTE_INFO_CAP_SIZE = 8;
  
  function format02x(value) {
    if (value >= 10) {
      return value.toFixed(0);
    }
    return '0' + value.toFixed(0);
  }
  function plss_gps_u32_to_str(gps_data, flag) {
    if (gps_data & 0x80000000) {
      var flag_char = '-';
      if (flag & GPS_STR_FLAG_LETTER) {
        flag_char = (flag & GPS_STR_FLAG_LONGITUDE) ? 'W':'S';
      }
    } else {
      var flag_char = '+';
      if (flag & GPS_STR_FLAG_LETTER) {
        flag_char = (flag & GPS_STR_FLAG_LONGITUDE) ? 'E':'N';
      }
    }
    gps_data &= 0x7fffffff;
    var minutes = gps_data/1000/60;
    var fraction = gps_data - minutes * 60 * 1000;
    fraction = fraction*100/60;
    return flag_char +
      ('0' + (minutes/60).toFixed(0)).slice(-2) +
      ('0' + (minutes%60).toFixed(0)).slice(-2) +
      ('0000' + fraction.toFixed(0)).slice(-5);
  }
  
  
  module.exports = function decode(str) {
  
    var length = str.length / 2;
    var buffer = new ArrayBuffer(length);
    var dv = new DataView(buffer);
    for (var i = 0; i < length; ++i) {
      dv.setUint8(i,  parseInt(str[2 * i] + str[(2 * i) + 1], 16));
    }
  
    var index = 0;
    if (dv.getUint8(index) != PLSS_PL_INDICATOR || length < 2) {
      return 'unknown format';
    }
    var ret = '';
    ++index;
    while (index < length) {
      switch (dv.getUint8(index++)) {
        case PLSS_PL_IND_V0:
          while (index < length && 0 != dv.getUint8(index)) {
            var t = dv.getUint8(index);
            switch (t) {
              case PLSS_PL_TEMPERATURE:
                var v = dv.getInt16(index + 1) / 10;
                var txt = pl_str[t] + '=' + v.toFixed(1) + ' ';
               // console.log(txt);
                ret += txt;
                index += 3;
                break;
  
              case PLSS_PL_HUMIDITY:
                var txt = pl_str[t] + '=' + dv.getUint8(index + 1) + '% ';
                //console.log(txt);
                ret += txt;
                index += 2;
                break;
  
              case PLSS_PL_ACCELERATION:
                var v1 = dv.getInt16(index + 1);
                var v2 = dv.getInt16(index + 3);
                var v3 = dv.getInt16(index + 5);
                var txt = pl_str[t] + '=' + v1 + '/' + v2 + '/' + v3 + 'mg ';
                ret += txt;
                ////console.log(txt);
                index += 7;
                break;
  
              case PLSS_PL_ACCELERATION_2D:
                var v1 = dv.getInt16(index + 1) / 10;
                var v2 = dv.getInt16(index + 3) / 10;
                var txt = pl_str[t] + '=' + v1.toFixed(1) + '/' + v2.toFixed(1) + 'mg ';
                //console.log(txt);
                ret += txt;
                index += 5;
                break;
  
              case PLSS_PL_INCLINE:
                var v1 = dv.getInt16(index + 1) / 100;
                var v2 = dv.getInt16(index + 3) / 100;
                var v3 = dv.getInt16(index + 5) / 100;
                var txt = pl_str[t] + '=' + v1.toFixed(2) + '/' + v2.toFixed(2) + '/' + v3.toFixed(2) + ' ';
                //console.log(txt);
                ret += txt;
                index += 7;
                break;
  
              case PLSS_PL_BATTERY:
                var v1 = dv.getUint16(index + 1);
                var txt = pl_str[t] + '=' + v1 + 'mv ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
  
              case PLSS_PL_LIGHT:
                var v1 = dv.getUint16(index + 1);
                var txt = pl_str[t] + '=' + v1 + ' ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
  
              case PLSS_PL_SOUND:
                var v1 = dv.getUint16(index + 1) / 10;
                var txt = pl_str[t] + '=' + v1.toFixed(1) + 'db ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
  
              case PLSS_PL_GPS:
                var u320 = dv.getUint32(index + 1);
                if (0xffffffff == u320) {
                  var txt = pl_str[t] + '=unsync ';
                  //console.log(txt);
                  ret += txt;
                } else {
                  var u321 = dv.getUint32(index + 5);
                  var s1 = plss_gps_u32_to_str(u320, GPS_STR_FLAG_LETTER);
                  var s2 = plss_gps_u32_to_str(u321, GPS_STR_FLAG_LETTER | GPS_STR_FLAG_LONGITUDE);
                  var txt = pl_str[t] + '=' + s1 + ',' + s2 + ' ';
                  //console.log(txt);
                  ret += txt;
                }
                index += 9;
                break;
  
              case PLSS_PL_CO:
                var v1 = dv.getUint16(index + 1);
                var txt = pl_str[t] + '=' + v1 + 'ppm ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
  
              case PLSS_PL_EXT_ANALOG:
                var v1 = dv.getUint16(index + 1);
                var txt = pl_str[t] + '=' + v1 + 'mv ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
  
              case PLSS_PL_EXT_DIGITAL:
                var txt = pl_str[t] + '=' + dv.getUint8(index + 1) + ' ';
                //console.log(txt);
                ret += txt;
                index += 2;
                break;
  
              case PLSS_PL_PRESSURE:
                var txt = pl_str[t] + '=' + dv.getUint32(index + 1) + 'pa ';
                //console.log(txt);
                ret += txt;
                index += 5;
                break;
  
              case PLSS_PL_EXT_TEMPERATURE:
                var v1 = dv.getInt16(index + 1) / 10;
                var txt = pl_str[t] + '=' + v1.toFixed(1) + ' ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_DISP:
                var v1 = dv.getInt16(index + 1) / 100;
                var txt = pl_str[t] + '=' + v1.toFixed(2) + 'mm ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_PIR:
                var txt = pl_str[t] + '=' + dv.getUint8(index + 1) + ' ';
                //console.log(txt);
                ret += txt;
                index += 2;
                break;
              case PLSS_PL_SOIL_HUMIDITY:
                var txt = pl_str[t] + '=' + dv.getUint8(index + 1) + '% ';
                //console.log(txt);
                ret += txt;
                index += 2;
                break;
              case PLSS_PL_EXT_PIR:
                var txt = pl_str[t] + '=' + dv.getUint8(index + 1) + ' ';
                //console.log(txt);
                ret += txt;
                index += 2;
                break;
              case PLSS_PL_EXT_CNTR:
                var txt = pl_str[t] + '=' + dv.getUint32(index + 1) + ' ';
                //console.log(txt);
                ret += txt;
                index += 5;
                break;
              case PLSS_PL_EXT_SWITCH:
              case PLSS_PL_EXT_LEAKAGE:
                var txt = pl_str[t] + '=' + ((dv.getUint8(index + 1) & 0x80) >> 7) + ':' + (dv.getUint8(index + 1) & 0x7f) + ' ';
                //console.log(txt);
                ret += txt;
                index += 2;
                break;
              case PLSS_PL_EXT_CO2:
                var v1 = dv.getUint16(index + 1) / 10;
                var txt = pl_str[t] + '=' + v1.toFixed(1) + '% ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_EXT_CO2_PPM:
                var v1 = dv.getUint16(index + 1);
                var txt = pl_str[t] + '=' + v1 + 'ppm ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_US_DISTANCE:
                var v1 = dv.getUint16(index + 1);
                var txt = pl_str[t] + '=' + v1 + 'mm ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_EXT_CURRENT:
                var v1 = dv.getUint16(index + 1) * 10;
                var txt = pl_str[t] + '=' + v1.toFixed(0) + 'mA ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_EXT_CURRENT_UA:
                var v1 = dv.getUint16(index + 1) / 10;
                var txt = pl_str[t] + '=' + v1.toFixed(1) + 'mA ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_EXT_PSI:
                var v1 = dv.getUint16(index + 1);
                var txt = pl_str[t] + '=' + v1 + ' ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_EXT_PM:
                var v1 = dv.getUint16(index + 1);
                var v2 = dv.getUint16(index + 3);
                var v3 = dv.getUint16(index + 5);
                var txt = pl_str[t] + '=' + v1 + '/' + v2 + '/' + v3 + 'ug ';
                //console.log(txt);
                ret += txt;
                index += 7;
                break;
              case PLSS_PL_POS_BMP8:
                var txt = pl_str[t] + '=' + dv.getUint8(index + 1) + ' ';
                //console.log(txt);
                ret += txt;
                index += 2;
                break;
              case PLSS_PL_POS_BMP16:
                var txt = pl_str[t] + '=' + dv.getUint16(index + 1) + ' ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_EXT_CURRENT_AVG:
                var v1 = dv.getUint16(index + 1)/100;
                var v2 = dv.getUint16(index + 3)/100;
                var v3 = dv.getUint16(index + 5)/100;
                var txt = pl_str[t] + '=' + v1.toFixed(2) + '/' + v2.toFixed(2) + '/' + v3.toFixed(2) + ' ';
                //console.log(txt);
                ret += txt;
                index += 7;
                break;
              case PLSS_PL_UV_INDEX:
              case PLSS_PL_WIND_DIR:
                var txt = pl_str[t] + '=' + dv.getUint8(index + 1) + ' ';
                //console.log(txt);
                ret += txt;
                index += 2;
                break;
              case PLSS_PL_WIND_SPEED:
                var txt = pl_str[t] + '=' + dv.getUint16(index + 1) + ' ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_RAINFALL:
                var v1 = dv.getUint16(index + 1);
                var txt = pl_str[t] + '=' + v1.toFixed(1) + 'mm ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_VIBRATION:
                var v1 = dv.getUint8(index + 1);
                var txt = pl_str[t] + '=' + v1 + v & 0x8 ? '*':'-' + v1 & 0x2 ? '3':'2' + v1 & 0x1 ? 'D':'S' + ' ';
                //console.log(txt);
                ret += txt;
                index += 2;
                break;
              case PLSS_PL_MOTION_HZ:
                var v1 = dv.getUint16(index + 1);
                var v2 = dv.getUint16(index + 3);
                var v3 = dv.getUint16(index + 5);
                var txt = pl_str[t] + '=' + v1 + '/' + v2 + '/' + v3 + ' ';
                //console.log(txt);
                ret += txt;
                index += 7;
                break;
              case PLSS_PL_MOTION_V:
              case PLSS_PL_MOTION_D:
                var v1 = dv.getInt16(index + 1) / 10;
                var v2 = dv.getInt16(index + 3) / 10;
                var v3 = dv.getInt16(index + 5) / 10;
                var txt = pl_str[t] + '=' + v1.toFixed(1) +'/' + v2.toFixed(1) + '/' + v3.toFixed(1) + ' ';
                //console.log(txt);
                ret += txt;
                index += 7;
                break;
              case PLSS_PL_EXT_CNTR_12:
                var v1 = dv.getUint16(index + 1);
                var v2 = dv.getUint16(index + 3);
                var txt = pl_str[t] + '=' + v1 + ',' + v2 + ' ';
                //console.log(txt);
                ret += txt;
                index += 5;
                break;
  
              case PLSS_PL_EXT_GAS_VOC:
                var txt = pl_str[t] + '=' + dv.getUint16(index + 1) + 'ppm ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
              case PLSS_PL_EXT_PH_VALUE:
                var txt = pl_str[t] + '=' + dv.getUint8(index + 1) / 10 + ' ';
                //console.log(txt);
                ret += txt;
                index += 2;
                break;
              case PLSS_PL_EXT_O2_CONCENTRATION:
                var txt = pl_str[t] + '=' + dv.getUint16(index + 1) + '% ';
                //console.log(txt);
                ret += txt;
                index += 3;
                break;
  
              default:
                if (t == PLSS_PL_EXT_CH2O || (t >= PLSS_PL_EXT_NH3 && t <= PLSS_PL_EXT_C2H4O3)) {
                  var txt = pl_str[t] + '=' + dv.getUint16(index + 1) + ' ';
                  //console.log(txt);
                  ret += txt;
                  index += 3;
                  break;
                }
  
                index += length;
                break;
            }
          }
          break;
  
        case PLSS_PL_IND_PPB:
          if (length - index  >= 200) {
            ret += 'plss polysense personality base ';
            index += 200;
          } else {
            index += length;
          }
          break;
        case PLSS_PL_IND_PRB:
          if (lenght - index >= 200) {
            ret += 'plss prb ';
            index += 200;
          } else {
            index += length;
          }
          break;
        case PLSS_PL_IND_INFO:
          if (length - index >= 12) {
            ret += 'plss mote information ';
            index += 12;
          } else {
            index += length;
          }
          break;
        case PLSS_PL_IND_CLOCK:
          if (length - index >= 6) {
            ret += ('plss mote clk: ' + ('0' + dv.getUint8(index)).slice(-2)
                     + '-' + ('0' + dv.getUint8(index + 1)).slice(-2)
                     + '-' + ('0' + dv.getUint8(index + 2)).slice(-2)
                     + ' ' + ('0' + dv.getUint8(index + 3)).slice(-2)
                     + ':' + ('0' + dv.getUint8(index + 4)).slice(-2)
                     + ':' + ('0' + dv.getUint8(index + 5)).slice(-2) + ' ');
            index += 6;
          } else {
            index += length;
          }
          break;
        case PLSS_PL_IND_INFO_EXT:
          if (length - index >= 21) {
            ret += 'plss mote information-ext ';
            index += 21;
          } else {
            index += length;
          }
          break;
        case PLSS_PL_IND_INFO_CAP:
          if (length - index >= PLSS_MOTE_INFO_CAP_SIZE) {
            ret += 'plss mote capability ';
            index += PLSS_MOTE_INFO_CAP_SIZE;
          } else {
            index += length;
          }
          break;
        case PLSS_PL_IND_DATA:
          index++;
          if (length - index > dv.getUint8(index)) {
            ret += 'plss data ';
            index += (1 + dv.getUint8(index));
          } else {
            index += length;
          }
          break;
        case PLSS_PL_IND_VIDEO:
          if (length - index > dv.getUint8(index) + 5) {
            ret += ('plss video data: ' +
                    dv.getUint8(index) +
                    ' bytes, ' +
                    dv.getUint32(index + 1) +
                    ' offset ');
            index += (5 + dv.getUint8(index));
          } else {
            index += length;
          }
          break;
        default:
          ret += 'unknown plss format ' + str[2 * (index - 1)];
          break;
      }
    }
    return ret;
  }

  //module.exports = lora_plss_payload_sprintf