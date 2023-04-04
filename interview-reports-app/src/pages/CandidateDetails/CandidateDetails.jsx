import './CandidateDetails.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { formateDate } from '../../utils/date-function';

export const CandidateDetails = ({openModal, setOpenModal}) => {
    const [candidate, setCandidate] = useState({});
    const [reports, setReports] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3333/api/candidates/?id=${id}`)
        .then(response => response.json())
        .then(data => setCandidate(data[0]))
    }, [id]);

    

    useEffect(() => {
        fetch(`http://localhost:3333/api/reports?candidateId=${id}`)
        .then(response => response.json())
        .then(data => setReports(data))
    }, [id])

    

    return (
      <div
      className={` ${
        openModal ? "modalUp" : "modalDown"
      } space container pt-4 main-mb `}
    >
      {candidate && 
        <div className="row pt-4">
          <div className="col-md-2 col-6 mx-auto">
            <img
              className="img-fluid w-100"
              src={`https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png`}
              alt="Avatar"
            ></img>
          </div>
          <div className="col-md-10">
            <div className="row h-50 py-2">
              <div className="col-md-6">
                <span>Name:</span>
                <h4 className="p-3">{candidate.name}</h4>
              </div>
              <div className="col-md-6">
                <span>Date of birth: </span>
                <h4 className="p-3">{formateDate(candidate.birthday)}</h4>
              </div>
            </div>
            <div className="row h-50 py-2">
              <div className="col-md-6">
                <span>Email: </span>
                <h4 className="p-3 text-truncate">{candidate.email}</h4>
              </div>
              <div className="col-md-6">
                <span>Education: </span>
                <h4 className="p-3">{candidate.education}</h4>
              </div>
            </div>
          </div>
        </div>
      }
      <div className={`${openModal ? "modalUp" : "modalDown"}reports container py-5`}>
        <h3>Reports</h3>

        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Company</th>
                <th scope="col">Interview Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <>
                <tr key={report.id}>
                  <td>{report.companyName}</td>
                  <td>{formateDate(report.interviewDate)}</td>
                  <td className="d-flex justify-content-between">
                    <span>{report.status}</span>
                    <span
                      className="me-2 eye"
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      <i className="far fa-eye"></i>
                    </span>
                  </td>
                  {openModal && <Modal candidate={candidate} report={report} setOpenModal={setOpenModal}/>}
                </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
}