import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import './Project.css';
import { useDispatch } from 'react-redux';
import { deleteProject, likeProject } from '../../../actions/projects';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { FaRegTrashAlt, FaThumbsUp, FaEdit } from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'






const Project = ({ project, setCurrentId }) => {
 
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  
  
  


  const Likes = () => {
    if(project.likes.length > 0){
      
      return project.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
      ?(
      <>&nbsp;{project.likes.length > 2 ? `You and ${project.likes.length -1} others` : `${project.likes.length} Like${project.likes.length > 1 ? 's' : '' }`}</>
      )
      :
      (
        <>
        &nbsp;{project.likes.length}{project.likes.length === 1 ? ' Like' : ' Likes'}
        </>
      );
    }

    return <>&nbsp;Like</>
  }
  const submit = () => {
    confirmAlert({
      title: 'Deleting Project',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(deleteProject(project._id))
        },
        {
          label: 'No',
          onClick: () => () => alert('Click No')
        }
      ]
    })
  };

  return (
    <div>
    <Card className={"cardContainer"} >
        <CardImg top height="400px" src={project.image} alt="Proje Resmi" />
        <Button >
          <Likes  />
          </Button>
        <CardBody>
        
          <CardTitle tag="h5">{project.projectName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {project.groupName}
             <Link className={"paragraf"} to="/projectDetails" onClick={() => setCurrentId(project._id)}>Detaylara Git</Link>
            
          </CardSubtitle>
          <CardText>{project.title}</CardText>
          <CardText>{moment(project.createdAt).fromNow()}</CardText>  
          
          <FaThumbsUp className={"different"} disabled={!user?.result} onClick={() => dispatch(likeProject(project._id))}><Likes  /></FaThumbsUp>
            
          {(user?.result?.googleId === project?.creator || user?.result?._id === project?.creator) && (
            <FaRegTrashAlt className={"different"} onClick={() => dispatch(submit)}>Sil</FaRegTrashAlt>
          )}
          

          {(user?.result?.googleId === project?.creator || user?.result?._id === project?.creator) && (
          <FaEdit className={"different"} onClick={() => setCurrentId(project._id)}>Düzenle</FaEdit>
          )}

        </CardBody>
      </Card>
      
    </div>
     
  );
 
};

export default Project;
