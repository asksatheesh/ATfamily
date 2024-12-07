const members = {
    athi: {
        name: 'P.Athisekaran',
        bio: 'He is a Business Man',
        img: 'images/Athisekaran.jpg'
    },
    thangam: {
        name: 'A.Thangakani',
        bio: 'She is a HomeMaker.',
        img: 'images/Thangakani.jpg'
    },
    krishna: {
        name: 'A.Krishna Kumar',
        bio: 'Krishna Kumar is a Civil Engineer.',
        img: 'images/kk.jpg'
    },
    satheesh: {
        name: 'A.Satheesh Kumar',
        bio: 'Satheesh Kumar is a Software Engineer.',
        img: 'images/Satheesh.jpg'
    },
    salini: {
        name: 'A.Salini',
        bio: 'She is a HomeMaker.',
        img: 'images/Salini.jpg'
    },
    karthika: {
        name: 'S.Karthika',
        bio: 'She is a HomeMaker.',
        img: 'images/Karthika.jpg'
    },
    sarah: {
        name: 'R.Saranya',
        bio: 'She is a HomeMaker.',
        img: 'images/Saranya.jpg'
    },
    krishnakumar: {
        name: 'A.Krishna Kumar',
        bio: 'He is an IT Engineer.',
        img: 'images/KrishnaKumar.jpg'
    },
    asmi: {
        name: 'K.Asmith',
        bio: 'He is a Student.',
        img: 'images/Asmith.jpg'
    },
    tiwani: {
        name: 'K.Tiwana Athisa',
        bio: 'She is a Student.',
        img: 'images/Tiwani.jpg'
    },
    ayana: {
        name: 'K.Ayana Sri',
        bio: 'She is a Student.',
        img: 'images/Ayana.jpg'
    },
    dhira: {
        name: 'S.Aadhiran',
        bio: 'New Born Baby.',
        img: 'images/Aadhiran.jpg'
    }
};

function showMemberDetails(memberId) {
    const member = members[memberId];
    if (member) {
        document.getElementById('member-name').innerText = member.name;
        document.getElementById('member-bio').innerText = member.bio;
        document.getElementById('member-img').src = member.img;
        document.getElementById('member-details').style.display = 'block';
    } else {
        alert('Member not found.');
    }
}

function closeMemberDetails() {
    document.getElementById('member-details').style.display = 'none';
}
