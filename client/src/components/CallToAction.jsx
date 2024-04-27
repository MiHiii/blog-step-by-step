import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Want to learn more about Javascript?</h2>
        <p className='text-gray-500 my-2'>Checkout these resources </p>
        <Button
          gradientDuoTone={'greenToBlue'}
          className='rounded-tl-xl rounded-bl-none '
        >
          <a href='/' target='_blank' rel='noopener noreferrer'>
            Lean More
          </a>
          s
        </Button>
      </div>
      <div className='p-7 flex-1'>
        <img
          className='rounded shadow-lg'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAz1BMVEX33x723h4AAAD23Q3+/v3//vn7+/wJCQnr1xvGthf54R374x3w2Bvy2hvo0Br23x7hyRiQeQm0nRDPuBXbwxfIsRSjjA26oxGehwyWfwqtlg+KcgeEbQbVvRbUwxiPeAi8rhVZVQluaAyBaQXAqRIABgCsoBOHfw+WjRDlzRmokQ6hiQy5qBTJuRawpBM8OwahlhEdHQJmYAtMSAgzMgVGRAcVFwB8dQ13YAAsLAUcHAKEfA44NgWakBEuLQUIDgAkJANWUAlfWwn24kv56oaZDQ+zAAAMQUlEQVR4nO2dCXPauhbHJe5biOQNG2O8AY1pqEmztGmb9t7bNs193/8zvXNklgKSsUg7Y2z/ZxIM2LL0m6OjI1kShB4VaaKOF1tGooPVwTqmDpaGOlga6mBpqIOloQ6WhjpYGupgaaiDpaEOloY6WBrqYGmoPbB+QabaA8sYs5fmqj2wqPXyJFoD6xfo/GDZhJ10HWWkcdWQGbnBBA4TE6EkxcTgA8YYZ+h2HA/fEcPKLSw+ZdSy6BognGWabEUHTjftTUkDa3UGNelp7qtmsJgRJUkcDjkl5thllDLv8xBMwjdzPxqPoxRK6X+2uBGESZYlBl7iT7MkDgqy3HEHcRyK28NxCMfmKmkjswRZbzmN4+Ak66wXLJYnoW+ZXuwDp1EGJmTFY2BgxoNsEAVunPmMpZnnZ7GbDv1rE2hGmeuY+SgEQ2T9URL53nxsIPbi+Hrt1w1Ey9LpwPV91+VnD4uaU5eDyHKK9WucWBz+8Isw8aBWcSMcUOIkgywwoUoytLwgMfCS9HOKZEdG8TkRx2x1vIHF/MzHmnqi+6oVLDZPBoMwHGTZEquJGcZBhhWP0EEgTIG7A8CQJP7GMIxkilfEWZYTHsWUC1iMsGUCx+LNFhajWcTFp/zsYVEWxuHc8/25J5w7M+JkXBRr4IkysxCcjTkdbJJnfhK7nufP/ZxR7iaeH4zCwXhI2PZ4RYuijcbXqe+OB+HSlNz/rGARIw5JYRlcsBsm4wS9PEACWDYY1tTAOjneuGfmZunqCrBAM0qmy7k/SsAlmVGGx9eQwOrcqcOIEyYh+KwB2OG5wzLjMVJiLHcxKrDiELw50BKwGHPGcQ4fs1G4uYIHmQOXgDfzfXBEzCRQy5axATksjkfx2sGzcIg12mScW3F0/q0hh5bNMpz5OIsgCXBZBuF+Nocyhqnhjz+Dy8aYK4qN9RXMyQZDw0qjOClshXEnnFqFV2c8x2MMuNA6r0VVBhv0s6gBDp7SCKKnLBunHFIQDSGFigat2DjJktGwcOsMrGlzBcQCeMUU4iwRaQ1HWUAKFCYeY7sHLSbGFdEcYRl+PBXJnzssAGGlfmpxhhnLc9EQEodRNh4NDb6OAqz5xrKw5g09z7FX1coIA2PT/MFx0Tw4Q0TmovdifuidGL/XDpborxxmko+Dn6PIvTO2V4Cn2n5Hd1Ni8yVTpF9VtYMlFbs+rX+yk4Y/fmkaZwJrdFr/ZCcNL2wHLL58GSz0/i2CFb0MVgoRQ9CSasij0ctghddDJ543CBYlRawEDZaN7/A/vuAw1TJixVFx4uoFhxToqm0U18Ib8d8W59JtusRbhktDjDbQkyOHGsGidMhyDKBMz8GAyIEXMS6awjvovxDDc3AUx9tEpKk4HHrYNaLmED+ycmZBKG/nngeoc9OwqAMpm16Ogw2QJJ7q8OGpQXNdYBE2HfoWRvHOPMXRGHhhEEo66z6vOYT4gQVeSoqhYra0DDClpRFhH8i7NnFsL+QjH88a5vBVOpwHjseoHa3SsnBombp+ehKrWsFyXSyLNecmUOEuK16CdD2kbgbQTTGCdcjFRoGD/30Xv408HyL9dB7MBawAO4LmHGSIJA0E7fouEg3HDYjgIzrAGuX6kYM+3XeRReR78NUQijx0EYfvj9ZwI24L+wqwixikEKCz1AkcAcv3IJc8StMl3yTJ3D4aIYmMs+9Ig9GIBzrUtkz4Rw18AW9lWXA/A9O0xJ2tdeLwofjP8EuDwgt4LpNRHNcTV4nLcACMEssUpxLDxPsw4+x9Vv3VwdJQB0tDHSwNdbA01MHSUAdLQx0sDXWwNNTB0tB5wjr9ruvzWCGild+zhGXjI69DHb2tyBjjrJ9PZm9vb9/OLiZ9G96Tijk+S1jQYZ5dHMoqva3IFbdv7t9/ed3b6vvd5f3E5pV4nSmsfk+ii7IxdmFTN5fvZBf2nh4n/LhhtgUW5IgZ909SUoW+3dpHcbUDFqCy7/8sQSVwzbAylt62BbAgO3xydwQV6tkqn17TAliQG/amAirQ9xkvy3vzYUFm7PfVWIG+ltFqPCzISv9jZVa93mOJm286LMiJqcMKaHFqK7LfcFiQE/uVFqteb6H08o2Hxf/SZNXrXaloNR0Wu9Bm1etNFFNHmg0LKmFZ1K7SB1tegkbDgkq4OIFVr/eXvCI2HJb0vAqaSDs+TYYFhlUxcj/QnXTZWLNhMfmIzFG9yltXDSlRNoWvvs5ubi5uF9Lu9adbxfBDo2HxRzmqx3y1hpPzyeXBt5d9VY+nwbAgbvhbykqMW9Gi8IRf7I5zvSsZ1WoyLJJLWV1we5s/8Gv9Dz99+VfZeGmTYcmj970YCml9W393N2nreBbl95KTXvf35pMCrbUF3otVnCW3bTIsWR/68iA4h3DsFr/54ZSaFWk4LFljeH8YbgKt595rVbywc2KDYclGk28PRxQgt/kzxAuqMb+fTuxgIa1jNXB1XoNhXVarhisKFW7bZFgyn3Xo4DVu22RYstbwndnBksL6Kjvr/nTTajIsNpOd1XPKI8+y2zYYFplIYX2xTqXVZFi0/0lK6115D7Dkts2FBU5L9Xx1YZ+Eq9GwmNTDC+Mqpq5pZrPRsBROS+jbrbAurYw2GhblZVPYvr3pr4dMq9620bDYVQksUDHv1rbldzm8bYNhYTa/l9PqPcw0nFfDYUkHS3f19LVybWw0LKyIVSbeLpxquBoP66YCrF7vcsJJqwf/iuJVne7wftLqYeVV+aRDgFJcbX5gsS6f/VCRVm9hlq9IaToszKpZxckLlT27Jy2AJSZ3/6hKq4dPedq7aEDQsi8r0+qVrEhpASzMbYXgdKM3bZ0Hvykkn8inH8l0qZis3A5YmF9Gq09cfqUoQTtgFcaVP1el9SD38m2BVczyu6kaRLySBlytgVXURT6ruERMutqpRbDWuKqtEptJamKrYK1wSWYoH+pJ8pi/ZbBWvqv/5vj6J0m41TpYK1z226Pd68MNSFoIi1SsjYuDmVzthLUyr3zxWpbOWvZ+MdoKa+28yvYRme3PqGwvLIJbS4HzUg87X+7Xw1bDKnpBlmqLjKf9Jxgth1VURtX4zeRgMUa7YRXGpViXeMU6WAepUS6fULng9t6JHSzl87J9D98KWCLHpekRR5bgw3nBUiSkvX8WLf8dBjAt2dDN3Tn5LExIPnlKCutG8dyQ8NkHp9y25KsxPuzdu8awABTvS9dDKBb03sgWfOEPcUOf+ceRDeqk4cOXc4GFc1rYlXzHIcVk0f2wqAgL+sWilPKFFecNC4s5AYv43pckRtmtDJZ1mAazr9Zz/yZlSwXkk23OoxoiKqvwIrJVXIr9eOx9d4zOavPtu1zttuB2sif8Z+HgsZgbi7g5tAj5LOSnnYYeeTvPO3ZiKGkpdvj5Uf/QAYs52bbkT/2DYSW5y9qJivB3pPfN70416UM15e2x7rAobrSw044/783UoIptU7bxNjQOjN8eTlR+ymWbH+Id5asL9le91g0W1sD9Yi52aCmLtu32As4b+fPB28OZthQNWb4i6qLWPouu2sA9PdpklSZFo8nlj2a2kYPNlPManifFbuZ0W3rCpW0raN8B1AoWOhppDbubiB3uhd3xmdwMPm2HzG1SMkf5ciK2yy/uRyC9G9VUt/2uYc1gKdaeYsZvc5Mxuz+5V01X+CnGELtaqPXtcQaJ4U9p2tbN4oPyvPtaj8GXLuOCAFVuUivN2KYbSVUbHP2kLx8fHu5KH+4c1MKawao+D/tAf5o7jYDOVD+FDp5X1AsWmJZ1atEWeyGpdLsQLUm7mnWCdfr+jzmxdxIi/WMLwo5I0s+qFyxsD/X22F7rca9oymissiS/tVIzWMq9547o9cHghPIpREXJhnRqB4vytycU7UrS26bKYLOC3su6kXWDdZrbeiWf1Hg6rb+ls7trCEu5vahST33ZUD1VPz09nqB0NKd2sEQZ9Ta8/67YXQZSYo46QFfrg2Isp36wtGviJ/WAMdVbtrPSD7ld/T5YLxwq1WjJvuWlg+tE1fFWamGrHjLWExYhvP+x998K6j2bit9Q+Cmpx0pJFek9XXBlSr8HFvnnXy/XfyrpFyZ1NL3//fGbYP27efpNsCj9o4k6qR6eVnlbqg6WhjpYGupgaaiDpaEOloY6WBrqYGmog6WhDpaGOlga6mBpqIOloQ6WhjpYGupgaej/ZJE7jyCjiXYAAAAASUVORK5CYII='
        />
      </div>
    </div>
  );
}