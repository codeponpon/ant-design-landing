import React from 'react';
import { Link } from 'bisheng/router';
// import * as utils from './utils';

export default function NotFound() {
  return (
    <div id="page-404">
      <section>
        <h1>404</h1>
        <p>
          หน้าที่กำลังมองหาไม่มี
          <Link to="/">กลับหน้าแรก</Link>
        </p>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: '#react-content { height: 100%; background-color: #fff }',
        }}
      />
    </div>
  );
}
