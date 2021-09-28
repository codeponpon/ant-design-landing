import AV from 'leancloud-storage';

// serverURLs: 'https://ogajshc9.lc-cn-n1-shared.com'
// export const appId = 'ogaJShC9qJERt8LqGO80z2pO-gzGzoHsz';
// export const appKey = '8e5H5xBF86hI9vItQI1pt4kP';

export const appId = '9wdk0CPI9UH2aJpS0uBvRhW4-MdYXbMMI';
export const appKey = 'MOHrjfK59x2RhfkgRdwPXJn2';

AV.init({
  appId,
  appKey,
  serverURLs: 'https://9wdk0cpi.api.lncldglobal.com',
});

export default AV;
