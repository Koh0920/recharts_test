import React from 'react';
//Rechartから必要なコンポーネントをインポート
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ReferenceArea , ResponsiveContainer } from 'recharts';

//折れ線にするための仮データ
const data = [
  { name: '3/27', uv: 10 },
  { name: '28', uv: 12 },
  { name: '29', uv: 15 },
  { name: '30', uv: 18 },
  { name: '31', uv: 20 },
  { name: '4/1', uv: 25 },
  { name: '2', uv: 32 },
  { name: '3', uv: 35 },
  { name: '4', uv: 38 },
  { name: '5' },
  { name: '6'},
  { name: '7'},
  // 他のデータポイント...
];

export default function MyLineChart() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          style={{ backgroundColor: '	#1E1E1E' }}
        >
         //中央から外側にかけてのグラデーションのカスタム定義
         <defs>
           <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
             <stop offset="0%" stopColor="#72B202" stopOpacity={0.05} />
             <stop offset="25%" stopColor="#72B202" stopOpacity={0.5} />
             <stop offset="50%" stopColor="#72B202" stopOpacity={0.85} />
             <stop offset="75%" stopColor="#72B202" stopOpacity={0.5} />
             <stop offset="100%" stopColor="#72B202" stopOpacity={0.05} />
           </linearGradient>
         </defs>

          <CartesianGrid strokeDasharray="0" stroke="#72B202" strokeWidth={0.35} />
          <XAxis dataKey="name" tick={{ fill: '#72B202', fontFamily:'MyCustomFont'}}  />
          <YAxis type="number" domain={[0, 90]} interval={0} tickCount={10} tick={{ fill: '#72B202', fontFamily:'MyCustomFont' }}/>
          <Tooltip />
          //折れ線グラフ
          <Line type="linear" dataKey="uv" stroke="#1990A0" strokeWidth={2}
          //白いドットを非表示
          dot ={false} />
          //参照線の表示 4/4に実線
          <ReferenceLine x="4" stroke="#72B202" strokeWidth={1} />
          //参照帯の表示（緑色のグラデーション）
          <ReferenceArea y1={65} y2={78} fill="url(#gradient)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
