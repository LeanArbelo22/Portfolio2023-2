import styled from 'styled-components';
import profileImage from '../assets/profile-img.png';
import shapeOne from '../assets/shape-1.png';
import shapeTwo from '../assets/shape-2.png';

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 12px;
  transform: translateY(-9%);
  width: 100%;
  max-width: 680px;
`;

const Banner = styled.div`
  background-color: var(--primary);
  padding-bottom: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 1;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  height: 800px;
  border-radius: 500px;
  object-fit: cover;
`;

const Data = styled.p`
  position: absolute;
  bottom: 20%; // 12
  left: -4%; // r 6
  z-index: 1;
  background-color: var(--container);
  box-shadow: var(--shadow);
  border: 2px solid var(--border);
  padding-inline: 1.25rem; // !!
  width: 250px;
  height: 82px;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const DataText = styled.span`
  width: 100%;
  color: var(--title);
  font-weight: 700;
  position: relative;

  &.lg {
    text-align: center;
    font-size: 2rem;

    & b {
      color: var(--primary);
      position: relative;
      left: 5px;
      bottom: -1px;
    }
  }

  &.sm {
    margin: 0 0.5rem 0 0.3rem;
    font-size: var(--tiny);
    line-height: 1.5;

    & span {
      color: var(--primary);
    }
  }
`;

const Shape = styled.img`
  &.one {
    width: 226px;
    height: 226px;
    top: -10%;
    right: 6%;
  }

  &.two {
    width: 141px;
    height: 141px;
    bottom: 10%;
    left: -12%;
  }

  &.three {
    width: 141px;
    height: 141px;
    bottom: 4%;
    right: -2%;
  }
`;

const Profile = () => {
  return (
    <ImageWrapper>
      <Banner>
        <Image src={profileImage} alt="profile" />
      </Banner>
      <Data>
        <DataText className="lg">
          + <b>2</b>
        </DataText>
        <DataText className="sm text-cs">
          <span>años</span> formacion
        </DataText>
      </Data>
      <Shape src={shapeOne} className="shape one" alt="shape" />
      <Shape src={shapeTwo} className="shape two" alt="shape" />
      <Shape src={shapeTwo} className="shape three" alt="shape" />
    </ImageWrapper>
  );
};

export default Profile;
