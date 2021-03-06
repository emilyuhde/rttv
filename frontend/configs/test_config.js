var configs = [
  {
    id: 'status',
    type: 'Text',
    controls: [
      {
        label: 'NavMode',
        source: 'GPS\x01.NavMode'
      },
      {
        label: 'Satellites',
        source: 'GPS\x01.NumOfSats'
      }
    ]
  },
  {
    id: 'gps',
    type: 'Text',
    controls: [
      {
        label: 'Lat',
        source: 'GPS\x01.Latitude'
      },
      {
        label: 'Long',
        source: 'GPS\x01.Longitude'
      },
      {
        label: 'Height',
        source: 'GPS\x01.Height'
      }
    ]
  },
  {
    id: 'acceleration',
    type: 'Text',
    controls: [
      {
        label: 'X',
        source: 'ADIS.AccelerometerX'
      },
      {
        label: 'Y',
        source: 'ADIS.AccelerometerY'
      },
      {
        label: 'Z',
        source: 'ADIS.AccelerometerZ'
      },
      {
        label: 'Magnitude',
        source: 'ADIS.AccelerometerMagn'
      }
    ]
  },
  {
    id: 'baz',
    type: 'LineGraph',
    width: 625, height: 320,
    maxDataSize: Number.MAX_VALUE,
    controls: [
      {
        label: 'Z Roll',
        source: 'ADIS.GyroscopeX'
      }
    ]
  },
  {
    id: 'altitude',
    type: 'Gauge',
    label: 'Altitude',
    size: 250,
    minorTicks: 5,
    max: 10000,
    yellowPercent: 80,
    redPercent: 90,
    controls: [
      {
        label: 'Height',
        source: 'GPS\x01.Height'
      }
    ]
  }
];